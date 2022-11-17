import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  players: player[] = [];

  @Output() onDeleteTeam = new EventEmitter<string>();

  ngOnInit(): void {
    this.teamData?.players.map((player) => {
      this.http.getPlayer(player).subscribe((data) => {
        const fetchedPlayer = data;
        this.players.push((fetchedPlayer as any).data);
      });
    });
  }

  deleteTeam(id: string): void {
    this.http.deleteTeam(id);
    this.onDeleteTeam.emit(id);
  }
}
