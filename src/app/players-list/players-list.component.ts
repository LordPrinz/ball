import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { player } from 'src/types/player';
import { HttpService } from '../config/http.service';
import { PlayerEditComponent } from '../player-edit/player-edit.component';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss'],
})
export class PlayersListComponent implements OnInit {
  allPlayers: player[] | undefined;
  hovering: string | null = null;

  constructor(private http: HttpService, public dialog: MatDialog) {}

  deleteHandler(id: string): void {
    this.allPlayers = this.allPlayers?.filter((p) => p._id !== id);
    this.http.deletePlayer(id).subscribe((response) => {});
  }

  editHandler(id: string) {
    const popup = this.dialog.open(PlayerEditComponent, {
      data: this.allPlayers?.find((player) => player._id === id),
    });

    popup.afterClosed().subscribe((data) => {
      if (!data) {
        return;
      }

      console.log(data);
    });
  }

  ngOnInit(): void {
    this.http.getPlayers().subscribe((data) => {
      this.allPlayers = (data as any).data;
    });
  }
}
