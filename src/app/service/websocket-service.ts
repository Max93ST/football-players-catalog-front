import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';

@Injectable({
    providedIn: 'root'
})
export class WebSocketService {

    private connecting: boolean = false;
    private topicQueue: any[] = [];

    socket = new SockJS('http://localhost:8080/ws');
    stompClient = Stomp.over(this.socket);

    subscribe(topic: string, callback: any): void {

        const connected: boolean = this.stompClient.connected;

        if (connected) {
            this.connecting = false;
            this.subscribeToTopic(topic, callback);
            return;
        }

        this.connecting = true;
        this.stompClient.connect({}, (): any => {
            this.subscribeToTopic(topic, callback);

            this.topicQueue.forEach((item: any) => {
                this.subscribeToTopic(item.topic, item.callback);
            })

            this.topicQueue = [];
        });
    }

    private subscribeToTopic(topic: string, callback: any): void {
        this.stompClient.subscribe(topic, (data: any) => {
            callback(data);
        });
    }

    public sendMessage(topic: string, body: any) {
        this.stompClient.send(topic, {}, JSON.stringify(body));
    }
}