import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { player } from 'src/types/player';
import { HttpService } from '../config/http.service';

@Component({
  selector: 'app-edit-team-dialog',
  templateUrl: './edit-team-dialog.component.html',
  styleUrls: ['./edit-team-dialog.component.scss'],
})
export class EditTeamDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditTeamDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private Ref: MatDialogRef<EditTeamDialogComponent>,
    private http: HttpService
  ) {}

  selectedPlayers: player[] = [];
  notSelectedPlayers: player[] = [];
  allPlayers: player[] | null = [];

  ngOnInit(): void {
    this.selectedPlayers = this.data.players;
    this.http.getPlayers().subscribe((data) => {
      this.allPlayers = (data as any).data;
      this.notSelectedPlayers = this.allPlayers?.filter(
        (ar) => !this.selectedPlayers.find((rm) => ar._id === rm._id)
      )!;
      const roles = this.selectedPlayers.map((player) => player.role);

      if (roles.find((role) => (role as any) === 'Goalkeeper')) {
        this.notSelectedPlayers = this.notSelectedPlayers.filter(
          (player) => (player.role as any) !== 'Goalkeeper'
        );
      }
    });
  }

  addPlayer(id: string) {
    const player = this.notSelectedPlayers.filter((pl) => pl._id === id)![0];
    this.notSelectedPlayers = this.notSelectedPlayers.filter(
      (pl) => pl._id !== id
    );
    this.Ref.close(player);
  }
}
