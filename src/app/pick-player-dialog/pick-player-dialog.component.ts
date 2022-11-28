import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { player } from 'src/types/player';

@Component({
  selector: 'app-pick-player-dialog',
  templateUrl: './pick-player-dialog.component.html',
  styleUrls: ['./pick-player-dialog.component.scss'],
})
export class PickPlayerDialogComponent implements OnInit {
  players: player[] = [];

  constructor(
    public dialogRef: MatDialogRef<PickPlayerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private Ref: MatDialogRef<PickPlayerDialogComponent>
  ) {}

  ngOnInit(): void {
    this.players = this.data;
  }

  addPlayer(id: string) {
    const player = this.players.filter((pl) => pl._id === id)![0];
    this.players = this.players.filter((pl) => pl._id !== id);
    this.Ref.close(player);
  }
}
