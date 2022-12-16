import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Team } from 'src/app/model/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private baseURL = "http://localhost:8080/teams";

  constructor(private httpClient: HttpClient) { }

  getTeamList(): Observable<Team[]> {
    return this.httpClient.get<Team[]>(`${this.baseURL}`);
  }

  createTeam(data: any): Observable<Team> {
    return this.httpClient.post<Team>(`${this.baseURL}`, data);
  }
}
