import { Component, OnInit, Inject } from '@angular/core';
import { Team } from 'src/app/model/team';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TeamService } from 'src/app/service/team.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent implements OnInit {

  team: Team;
  teams: Team[];

  constructor(private teamService: TeamService,
    public dialogRef: MatDialogRef<CreateTeamComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { teams: Team[] }) { }

  ngOnInit(): void {
    this.team = { id: null, name: '' }
    this.teams = this.data.teams;
  }

  private createTeam(team: Team): Observable<Team> {
    return this.teamService.createTeam(this.team)
  }

  onClick() {
    if (this.team.name && !this.teams.some(t => t.name === this.team.name)) {
      this.createTeam(this.team).subscribe(data => {
        this.dialogRef.close(data);
      });
    } else {
      this.dialogRef.close();
    }
  }
}
