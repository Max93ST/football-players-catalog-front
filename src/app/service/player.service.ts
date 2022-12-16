import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Player } from 'src/app/model/player';
import { WebSocketService } from './websocket-service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private baseURL = "http://localhost:8080/players";
  private topic = '/topic/player';

  constructor(private httpClient: HttpClient,
    private webSocketService: WebSocketService) { }

  createPlayer(data: any): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, data);
  }

  getPlayerList(): Observable<Player[]> {
    return this.httpClient.get<Player[]>(`${this.baseURL}`);
  }

  updatePlayer(player: Player) {
    this.webSocketService.sendMessage('/app/update', player);
  }

  deletePlayer(id: number) {
    this.webSocketService.sendMessage('/app/delete', id);
  }

  subscribe(callback: any): void {
    this.webSocketService.subscribe(this.topic, callback);
  }
}
