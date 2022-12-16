import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePlayerComponent } from './component/create-player/create-player.component';
import { PlayerListComponent } from './component/player-list/player-list.component';

const routes: Routes = [
  { path: 'players/list', component: PlayerListComponent },
  { path: 'players/add', component: CreatePlayerComponent },
  { path: '**', redirectTo: 'players/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
