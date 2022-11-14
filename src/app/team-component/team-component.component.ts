import { Component, OnInit } from '@angular/core';
import { HttpService } from '../config/http.service';

@Component({
  selector: 'app-team-component',
  templateUrl: './team-component.component.html',
  styleUrls: ['./team-component.component.scss'],
})
export class TeamComponentComponent implements OnInit {
  constructor(private http: HttpService) {}

  teams: any;

  ngOnInit(): void {
    this.http.getTeams().subscribe((data) => {
      this.teams = (data as any).data;
    });
  }
}
