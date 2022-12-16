import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PlayerService } from '../../service/player.service';
import { TeamListComponent } from '../team-list/team-list.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PlayerListComponent } from '../player-list/player-list.component';
import { Player } from 'src/app/model/player';
import { countrys } from 'src/app/model/country';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.scss']
})
export class UpdatePlayerComponent implements OnInit {

  @ViewChild(TeamListComponent, { static: true }) teamFormGroup: TeamListComponent;
  countrys = countrys;

  playerFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private playerService: PlayerService,
    public dialogRef: MatDialogRef<PlayerListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { player: Player }) { }

  ngOnInit(): void {
    this.playerFormGroup = this.formBuilder.group({
      id: ['', Validators.required],
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
      gender: ['', Validators.required],
      birthday: ['', Validators.required],
      team: this.teamFormGroup.selectTeamFormGroup(),
      country: ['', Validators.required]
    });

    if (this.data) {
      this.playerFormGroup.setValue({
        id: this.data.player.id,
        firstName: this.data.player.firstName,
        secondName: this.data.player.secondName,
        gender: this.data.player.gender,
        birthday: this.data.player.birthday,
        team: { id: this.data.player.team.id },
        country: this.data.player.country
      });
    }
  }

  savePlayer() {
    if (this.playerFormGroup.valid) {
      this.playerService.updatePlayer(this.playerFormGroup.value);
    }
  }
}
