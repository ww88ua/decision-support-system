import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {Criteria} from '../../../../shared/models/criteria.model';
import {TaskService} from '../../../../shared/services/task.service';
import {Task} from '../../../../shared/models/task.model';
import {Alternative} from '../../../../shared/models/alternative.model';


@Component({
  selector: 'app-add-task-third-step',
  templateUrl: './add-task-third-step.component.html',
  styleUrls: ['./add-task-third-step.component.sass']
})
export class AddTaskThirdStepComponent implements OnInit {

  rows: Array<string> = new Array('<div class="criteria" id="factor{{i}}">\n' +
    '      <input type="text" placeholder="Название критерия" id="criteriaName{{i}}">\n' +
    '      <i class="fa fa-times" aria-hidden="true" (click)="removeCriteria(i)"></i>\n' +
    '    </div>');

  criterias: Array<Criteria> = new Array<Criteria>();

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addCriteria() {
    this.rows.push('<div class="criteria" id="factor{{i}}">\n' +
      '      <input type="text" placeholder="Название критерия" id="criteriaName{{i}}">\n' +
      '      <i class="fa fa-times" aria-hidden="true" (click)="removeCriteria(i)"></i>\n' +
      '    </div>');
  }

  removeCriteria(i: string) {
    const index = this.rows.indexOf(i);
    this.rows.splice(index,1);
  }

  saveData() {

    for (let i = 0; i < this.rows.length; i++) {
      const name = (<HTMLInputElement>document.getElementById('criteriaName' + i)).value;

      const criteria: Criteria = new Criteria(name);
      console.log(criteria);
      this.criterias.push(criteria);

    }

    window.localStorage.setItem('task-criterias', JSON.stringify(this.criterias));

  }

}
