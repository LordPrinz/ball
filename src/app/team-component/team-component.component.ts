import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../config/http.service';

@Component({
  selector: 'app-team-component',
  templateUrl: './team-component.component.html',
  styleUrls: ['./team-component.component.scss'],
})
export class TeamComponentComponent implements OnInit {
  constructor(private http: HttpService) {}

  @Input()
  teamData: any;

  teams: any;

  ngOnInit(): void {
    console.log(this.teamData);
  }
}
