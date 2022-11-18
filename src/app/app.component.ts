import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ball';
  currentPage = '';

  constructor(private router: Router) {}

  createPlayerRedirectHandler() {
    this.router.navigate(['/players/new']);
  }
  createTeamRedirectHandler() {
    this.router.navigate(['/teams/new']);
  }
  playersRedirectHandler() {
    this.router.navigate(['/players']);
  }
  teamsRedirectHandler() {
    this.router.navigate(['/teams']);
  }
}
