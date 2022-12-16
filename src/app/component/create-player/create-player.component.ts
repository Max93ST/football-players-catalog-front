import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PlayerService } from '../../service/player.service';
import { TeamListComponent } from '../team-list/team-list.component';
import { countrys } from 'src/app/model/country';


@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss']
})
export class CreatePlayerComponent implements OnInit {

  @ViewChild(TeamListComponent, { static: true }) teamFormGroup: TeamListComponent;

  playerFormGroup: FormGroup;
  countrys = countrys;

  constructor(private formBuilder: FormBuilder,
    private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerFormGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
      gender: ['', Validators.required],
      birthday: ['', Validators.required],
      team: this.teamFormGroup.selectTeamFormGroup(),
      country: ['', Validators.required]
    })
  }

  createPlayer() {
    if (this.playerFormGroup.valid) {
      this.playerService.createPlayer(this.playerFormGroup.value).subscribe(data => {
      })
    }
  }
}
