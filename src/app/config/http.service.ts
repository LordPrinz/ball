import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:4761/api/v1';

  getPlayers() {
    return this.http.get(`${this.baseUrl}/players`);
  }
  getTeams() {
    return this.http.get(`${this.baseUrl}/teams`);
  }
  getTeam(id: string) {
    return this.http.get(`${this.baseUrl}/teams/${id}`);
  }
}
