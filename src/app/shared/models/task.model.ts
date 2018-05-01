import {Alternative} from './alternative.model';
import {Factor} from './factor.model';

export class Task {
  constructor(
    public name: string,
    public description: string,
    public alternatives: Array<Alternative>,
    public factors: Array<Factor>,
    public id?: number
  ) {}

}
