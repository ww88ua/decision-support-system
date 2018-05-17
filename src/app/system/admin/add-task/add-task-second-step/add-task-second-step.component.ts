import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {FormGroup} from '@angular/forms';
import {Alternative} from '../../../../shared/models/alternative.model';

@Component({
  selector: 'app-add-task-second-step',
  templateUrl: './add-task-second-step.component.html',
  styleUrls: ['./add-task-second-step.component.sass']
})

export class AddTaskSecondStepComponent {

  rows: Array<string> = new Array('<div class="alternative" id="alt{{i}}">\n' +
    '        <input type="text" placeholder="Название альтернативы" #altName id="altName{{i}}">\n' +
    '        <i class="fa fa-times" aria-hidden="true" (click)="removeAlternative(i)"></i>\n' +
    '    </div>');


  alternatives: Array<Alternative> = new Array<Alternative>();

  constructor() { }

  addAlternative() {
    this.rows.push('<div class="alternative" id="alt{{i}}">\n' +
      '        <input type="text" placeholder="Название альтернативы" #altName id="altName{{i}}">\n' +
      '        <i class="fa fa-times" aria-hidden="true" (click)="removeAlternative(i)"></i>\n' +
      '    </div>');
  }

  removeAlternative(i: string) {
    const index = this.rows.indexOf(i);
    this.rows.splice(index,1);
  }

  saveData() {
    for (let i = 0; i < this.rows.length; i++) {
      const name = (<HTMLInputElement>document.getElementById('altName' + i)).value;
      const alternative: Alternative = new Alternative(name);
      this.alternatives.push(alternative);
    }

    window.localStorage.setItem('task-alternatives', JSON.stringify(this.alternatives));

  }



}
