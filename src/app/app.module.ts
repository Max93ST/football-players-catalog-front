import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePlayerComponent } from './component/create-player/create-player.component';
import { CreateTeamComponent } from './component/create-team/create-team.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TeamListComponent } from './component/team-list/team-list.component';
import { PlayerListComponent } from './component/player-list/player-list.component'
import { MatTableModule } from '@angular/material/table';
import { WebSocketService } from './service/websocket-service';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdatePlayerComponent } from './component/update-player/update-player.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePlayerComponent,
    CreateTeamComponent,
    TeamListComponent,
    PlayerListComponent,
    UpdatePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
