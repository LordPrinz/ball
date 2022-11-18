import { Component, OnInit } from '@angular/core';
import { player } from 'src/types/player';
import { HttpService } from '../config/http.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss'],
})
export class PlayersListComponent implements OnInit {
  allPlayers: player[] | undefined;

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getPlayers().subscribe((data) => {
      this.allPlayers = (data as any).data;
    });
  }
}
