import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { PlayerGeneratorComponent } from './player-generator/player-generator.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { TeamContainerComponent } from './team-container/team-container.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamGeneratorComponent } from './team-generator/team-generator.component';

const routes: Routes = [
  {
    path: 'players/new',
    component: PlayerGeneratorComponent,
  },
  {
    path: 'teams',
    component: TeamContainerComponent,
  },
  {
    path: 'teams/new',
    component: TeamGeneratorComponent,
  },
  {
    path: 'players',
    component: PlayersListComponent,
  },
  {
    path: 'player/:id',
    component: PlayerDetailComponent,
  },
  {
    path: 'teams/:id',
    component: TeamDetailComponent,
  },
  {
    path: '',
    redirectTo: '/teams',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
