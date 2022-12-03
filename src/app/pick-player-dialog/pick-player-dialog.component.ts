import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { player } from 'src/types/player';
@Component({
  selector: 'app-pick-player-dialog',
  templateUrl: './pick-player-dialog.component.html',
  styleUrls: ['./pick-player-dialog.component.scss'],
})
export class PickPlayerDialogComponent implements OnInit {
  notSelectedPlayers: player[] = [];
  selectedPlayers: player[] = [];
  constructor(
    public dialogRef: MatDialogRef<PickPlayerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private Ref: MatDialogRef<PickPlayerDialogComponent>
  ) {}

  ngOnInit(): void {
    this.notSelectedPlayers = this.data.notSelectedPlayers;
    this.selectedPlayers = this.data.selectedPlayers;

    const roles = this.selectedPlayers.map((player) => player.role);

    if (roles.find((role) => (role as any) === 'Goalkeeper')) {
      this.notSelectedPlayers = this.notSelectedPlayers.filter(
        (player) => (player.role as any) !== 'Goalkeeper'
      );
    }
  }

  addPlayer(id: string) {
    const player = this.notSelectedPlayers.filter((pl) => pl._id === id)![0];
    this.notSelectedPlayers = this.notSelectedPlayers.filter(
      (pl) => pl._id !== id
    );
    this.Ref.close(player);
  }
}
