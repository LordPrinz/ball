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
  deleteTeam(id: string) {
    return this.http.delete(`${this.baseUrl}/teams/${id}`);
  }
  getPlayer(id: string) {
    return this.http.get(`${this.baseUrl}/players/${id}`);
  }
  createPlayer({ name, surname, age, club, role, image }: any) {
    const fd = new FormData();
    fd.append('image', image, image.name);
    fd.append('name', name);
    fd.append('surname', surname);
    fd.append('club', club);
    fd.append('role', role);
    fd.append('age', age);
    return this.http.post(`${this.baseUrl}/players`, fd);
  }
}
