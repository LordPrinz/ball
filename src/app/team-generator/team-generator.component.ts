import { Component, OnInit } from '@angular/core';
import { player } from 'src/types/player';

type playerDialog = {
  player: player;
  isSelected: boolean;
};

@Component({
  selector: 'app-team-generator',
  templateUrl: './team-generator.component.html',
  styleUrls: ['./team-generator.component.scss'],
})
export class TeamGeneratorComponent implements OnInit {
  ngOnInit(): void {}

  name: string = '';
  selectedPlayers: playerDialog[] = [];

  addPlayerToTeam(playerId: string) {
    const player = this.selectedPlayers.find(
      (player) => player.player._id === playerId
    )!;
    this.selectedPlayers = this.selectedPlayers.filter(
      (player) => player.player._id !== playerId
    );

    player.isSelected = true;
    this.selectedPlayers.push(player);
  }

  removePlayerFromTeam(playerId: string) {
    const player = this.selectedPlayers.find(
      (player) => player.player._id === playerId
    )!;
    this.selectedPlayers = this.selectedPlayers.filter(
      (player) => player.player._id !== playerId
    );
    player.isSelected = false;
    this.selectedPlayers.push(player);
  }

  nameInputHandler(event: any) {
    this.name = event.target.value;
  }

  submitHandler() {
    console.log('XD');
  }
}
