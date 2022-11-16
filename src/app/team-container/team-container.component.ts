import { Component, OnInit } from '@angular/core';
import { HttpService } from '../config/http.service';

@Component({
  selector: 'app-team-container',
  templateUrl: './team-container.component.html',
  styleUrls: ['./team-container.component.scss'],
})
export class TeamContainerComponent implements OnInit {
  constructor(private http: HttpService) {}

  teams: any;

  ngOnInit(): void {
    this.http.getTeams().subscribe((data) => {
      this.teams = (data as any).data;
    });
  }
}
