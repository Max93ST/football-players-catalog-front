import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/service/player.service';
import { Player, DisplayedColumnsPlayer } from 'src/app/model/player';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UpdatePlayerComponent } from '../update-player/update-player.component';
import 'src/app/util/prototypes';
import { countrys } from 'src/app/model/country';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  displayedColumns = DisplayedColumnsPlayer;
  players = new MatTableDataSource<Player>();
  countrys = countrys;

  constructor(private playerService: PlayerService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPlayers();

    this.playerService.subscribe((data: any) => {
      if (data.body) {
        const player = JSON.parse(data.body);
        const isDeleted = player.deleted;
        const condition = (el: Player) => el.id === player.id;

        const players = isDeleted ?
          this.players.data.deleteByCondition(condition) :
          this.players.data.findAndReplaceOrPush(condition, player);

        this.players.data = [...players];
      }
    });
  }

  private getPlayers() {
    this.playerService.getPlayerList().subscribe(data => {
      this.players.data = data;
    })
  }

  deletePlayer(id: number) {
    this.playerService.deletePlayer(id);
  }

  updatePlayerDialog(player: Player): void {
    const dialogRef = this.dialog.open(UpdatePlayerComponent, {
      data: { player: player },
    });
  }
}