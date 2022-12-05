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
    if (this.selectedPlayers.length !== 11) {
      alert('Your team must have 11 players');
    }
    const roles = this.selectedPlayers.map((player) =>
      player.role.toString().toUpperCase()
    );

    let currentRoleAmount = 0;
    let prevRole: string;
    const rolesAmount = roles.sort().map((role) => {
      if (role !== prevRole) {
        const tempRole = prevRole;
        prevRole = role;

        return {
          role: tempRole,
          amount: currentRoleAmount,
        };
      } else {
        currentRoleAmount++;
      }
    });

    console.log(rolesAmount);
  }

  openDialog() {
    const popup = this.dialog.open(PickPlayerDialogComponent, {
      width: '800px',
      data: this.notSelectedPlayers,
    });

    popup.afterClosed().subscribe((data: player) => {
      if (!data) {
        return;
      }

      this.addPlayerToTeam(data._id);
    });
  }
}
