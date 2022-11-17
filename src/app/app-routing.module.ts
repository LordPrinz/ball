import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerGeneratorComponent } from './player-generator/player-generator.component';
import { TeamContainerComponent } from './team-container/team-container.component';

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
