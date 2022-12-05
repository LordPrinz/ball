import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { player } from 'src/types/player';
import { team } from 'src/types/team';
import { HttpService } from '../config/http.service';
import { EditTeamDialogComponent } from '../edit-team-dialog/edit-team-dialog.component';

@Component({
  selector: 'app-team-component',
  templateUrl: './team-component.component.html',
  styleUrls: ['./team-component.component.scss'],
})
export class TeamComponentComponent implements OnInit {
  constructor(private http: HttpService, public dialog: MatDialog) {}

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

  editTeam(id: string): void {
    const popup = this.dialog.open(EditTeamDialogComponent, {
      width: '800px',
      data: {
        players: this.players,
      },
    });

    popup.afterClosed().subscribe((data: player) => {
      if (!data) {
        return;
      }
      this.players.push(data);

      const playersIds = this.players.map((player) => player._id);

      this.http
        .editTeam(id, {
          playerIds: playersIds,
        })
        .subscribe((data) => {
          console.log(data);
        });
    });
  }
}
