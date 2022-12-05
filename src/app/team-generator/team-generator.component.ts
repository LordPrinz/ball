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
    this.notSelectedPlayers = this.notSelectedPlayers.filter(
      (pl) => pl._id !== playerId
    );
  }

  removePlayerFromTeam(playerId: string) {
    const player = this.allPlayers.find((pl) => pl._id === playerId)!;
    this.notSelectedPlayers.push(player);

    this.selectedPlayers = this.selectedPlayers.filter(
      (pl) => pl._id !== playerId
    );
  }

  nameInputHandler(event: any) {
    this.name = event.target.value;
  }

  submitHandler() {
    if (this.selectedPlayers.length < 11) {
      alert('Not enough players');
      return;
    }

    const roles = this.selectedPlayers.map((player) => player.role);

    if (!roles.find((role) => (role as any) === 'Goalkeeper')) {
      alert('No Goalkeeper');
      return;
    }

    const playerIds = this.selectedPlayers.map((player) => player._id);
    this.http.createTeam(this.name, playerIds).subscribe((data) => {
      if ((data as any).status === 'success') {
        alert('Team Created!');
        this.selectedPlayers = [];
      } else {
        alert('Something went wrong!');
      }
    });
  }

  openDialog() {
    const popup = this.dialog.open(PickPlayerDialogComponent, {
      width: '800px',
      data: {
        notSelectedPlayers: this.notSelectedPlayers,
        selectedPlayers: this.selectedPlayers,
      },
    });

    popup.afterClosed().subscribe((data: player) => {
      if (!data) {
        return;
      }

      this.addPlayerToTeam(data._id);
    });
  }
}
