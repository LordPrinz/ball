import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
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
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { PickPlayerDialogComponent } from './pick-player-dialog/pick-player-dialog.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { EditTeamDialogComponent } from './edit-team-dialog/edit-team-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponentComponent,
    TeamContainerComponent,
    PlayerGeneratorComponent,
    TeamGeneratorComponent,
    PlayersListComponent,
    PlayerDetailComponent,
    TeamDetailComponent,
    PickPlayerDialogComponent,
    PlayerEditComponent,
    EditTeamDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { floatLabel: 'always' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
