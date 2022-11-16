import { Component, Input, OnInit } from '@angular/core';
import { player } from 'src/types/player';
import { team } from 'src/types/team';
import { HttpService } from '../config/http.service';

@Component({
  selector: 'app-team-component',
  templateUrl: './team-component.component.html',
  styleUrls: ['./team-component.component.scss'],
})
export class TeamComponentComponent implements OnInit {
  constructor(private http: HttpService) {}

  @Input()
  teamData: team | undefined;
  players: player[] | undefined;

  ngOnInit(): void {}
}
