import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Team } from 'src/app/model/team';
import { TeamService } from 'src/app/service/team.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateTeamComponent } from '../create-team/create-team.component';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  teams: Team[];
  teamFormGroup: FormGroup;

  constructor(private teamService: TeamService,
    private formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getTeamList();
  }

  createTeamDialog(): void {
    const dialogRef = this.dialog.open(CreateTeamComponent, {
      data: { teams: this.teams },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.teams.push(result);
      }
    });
  }

  selectTeamFormGroup() {
    this.teamFormGroup = this.formBuilder.group({
      id: ['', [Validators.required]]
    })
    return this.teamFormGroup;
  }

  private getTeamList() {
    this.teamService.getTeamList().subscribe(data => {
      this.teams = data;
    })
  }
}
