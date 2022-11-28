import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { player } from 'src/types/player';
import { HttpService } from '../config/http.service';
import { PickPlayerDialogComponent } from '../pick-player-dialog/pick-player-dialog.component';

@Component({
  selector: 'app-team-generator',
  templateUrl: './team-generator.component.html',
  styleUrls: ['./team-generator.component.scss'],
})
export class TeamGeneratorComponent implements OnInit {
  constructor(private http: HttpService, public dialog: MatDialog) {}

  selectedPlayers: player[] = [];
  notSelectedPlayers: player[] = [];
  allPlayers: player[] = [];

  ngOnInit(): void {
    this.http.getPlayers().subscribe((data) => {
      this.allPlayers = (data as any).data;
      this.notSelectedPlayers = this.allPlayers;
    });
  }

  name: string = '';

  addPlayerToTeam(playerId: string) {
    const player = this.allPlayers.find((pl) => pl._id === playerId)!;
    this.selectedPlayers.push(player);
    this.notSelectedPlayers = this.allPlayers.filter(
      (pl) => pl._id !== playerId
    )!;
  }

  removePlayerFromTeam(playerId: string) {
    const player = this.allPlayers.find((pl) => pl._id === playerId)!;
    this.notSelectedPlayers.push(player);
    this.selectedPlayers = this.allPlayers.filter((pl) => pl._id !== playerId)!;
  }

  nameInputHandler(event: any) {
    this.name = event.target.value;
  }

  submitHandler() {
    console.log('XD');
  }

  openDialog() {
    this.dialog.open(PickPlayerDialogComponent, {
      width: '800px',
      data: 'RIGHT CLICK',
    });
  }
}
