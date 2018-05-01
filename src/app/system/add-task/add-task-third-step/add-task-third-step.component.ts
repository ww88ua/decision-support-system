import { Component, OnInit } from '@angular/core';
import {Alternative} from '../../../shared/models/alternative.model';
import {Factor} from '../../../shared/models/factor.model';
import {Router} from '@angular/router';
import {AuthService} from '../../../shared/services/auth.service';
import {TaskService} from '../../../shared/services/task.service';
import {Task} from '../../../shared/models/task.model';

@Component({
  selector: 'app-add-task-third-step',
  templateUrl: './add-task-third-step.component.html',
  styleUrls: ['./add-task-third-step.component.sass']
})
export class AddTaskThirdStepComponent implements OnInit {

  rows: Array<string> = new Array('<div class="factor" id="factor{{i}}">\n' +
    '      <input type="text" placeholder="Название фактора">\n' +
    '      <i class="fa fa-times" aria-hidden="true" (click)="removeFactor(i)"></i>\n' +
    '\n' +
    '      <div class="row">\n' +
    '        <div class="col-md-6">\n' +
    '          <p>Обязательный критерий (если применимо)</p>\n' +
    '          <input type="text">\n' +
    '        </div>\n' +
    '        <div class="col-md-6">\n' +
    '          <div style="float: right">\n' +
    '            <p>Обязательный поиска (если применимо)</p>\n' +
    '            <input type="text">\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>');

  factors: Array<Factor> = new Array<Factor>();

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addFactor() {
    this.rows.push('<div class="factor" id="factor{{i}}">\n' +
      '      <input type="text" placeholder="Название фактора">\n' +
      '      <i class="fa fa-times" aria-hidden="true" (click)="removeFactor(i)"></i>\n' +
      '\n' +
      '      <div class="row">\n' +
      '        <div class="col-md-6">\n' +
      '          <p>Обязательный критерий (если применимо)</p>\n' +
      '          <input type="text">\n' +
      '        </div>\n' +
      '        <div class="col-md-6">\n' +
      '          <div style="float: right">\n' +
      '            <p>Обязательный поиска (если применимо)</p>\n' +
      '            <input type="text">\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>');
  }

  removeFactor(i: string) {
    const index = this.rows.indexOf(i);
    this.rows.splice(index,1);
  }

  saveData() {
    for (let i = 0; i < this.rows.length; i++) {
      const name = (<HTMLInputElement>document.getElementById('factorName' + i)).value;
      const mandatory = (<HTMLInputElement>document.getElementById('mandatory' + i)).value;
      const search = (<HTMLInputElement>document.getElementById('search' + i)).value;
      const factor: Factor = new Factor(name, mandatory, search);
      this.factors.push(factor);
    }

    const taskName = window.localStorage.getItem('task-name');
    const taskDescription = window.localStorage.getItem('task-description');
    const taskAlternatives = JSON.parse(window.localStorage.getItem('task-alternatives'));
    const taskFactors = this.factors;
    const task: Task = new Task(taskName, taskDescription, taskAlternatives, taskFactors);

    this.taskService.saveTask(task);
    console.log(task);
  }

}
