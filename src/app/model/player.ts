import { Team } from "./team";

export interface Player {
    id: number;
    firstName: string;
    secondName: string;
    gender: string;
    birthday: string;
    team: Team;
    country: string;
    deleted: boolean;
}

export const DisplayedColumnsPlayer =
    ['firstName', 'secondName', 'gender', 'birthday', 'team', 'country', 'action'];

