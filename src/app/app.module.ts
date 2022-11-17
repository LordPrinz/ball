import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TeamComponentComponent } from './team-component/team-component.component';
import { HttpClientModule } from '@angular/common/http';
import { TeamContainerComponent } from './team-container/team-container.component';
import { PlayerGeneratorComponent } from './player-generator/player-generator.component';
import { TeamGeneratorComponent } from './team-generator/team-generator.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';

@NgModule({
  declarations: [AppComponent, TeamComponentComponent, TeamContainerComponent, PlayerGeneratorComponent, TeamGeneratorComponent, PlayersListComponent, PlayerDetailComponent, TeamDetailComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
