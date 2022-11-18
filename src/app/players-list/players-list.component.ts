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
  hovering: string | null = null;

  constructor(private http: HttpService) {}

  deleteHandler(id: any): void {
    this.allPlayers = this.allPlayers?.filter((p) => p._id !== id);
  }

  ngOnInit(): void {
    this.http.getPlayers().subscribe((data) => {
      this.allPlayers = (data as any).data;
    });
  }
}
