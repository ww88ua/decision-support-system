import {Alternative} from './alternative.model';
import {Criteria} from './criteria.model';
import {User} from './user.model';

export class Task {
  constructor(
    public name: string,
    public description: string,
    public alternatives: Array<Alternative>,
    public criterias: Array<Criteria>,
    public selectedExperts: Array<User>,
    public id?: number
  ) {}

}
