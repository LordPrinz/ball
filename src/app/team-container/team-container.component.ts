import { Component, OnInit } from '@angular/core';
import { team } from 'src/types/team';
import { HttpService } from '../config/http.service';

@Component({
  selector: 'app-team-container',
  templateUrl: './team-container.component.html',
  styleUrls: ['./team-container.component.scss'],
})
export class TeamContainerComponent implements OnInit {
  constructor(private http: HttpService) {}

  teams!: team[];

  ngOnInit(): void {
    this.http.getTeams().subscribe((data) => {
      this.teams = (data as any).data;
    });
  }
}
