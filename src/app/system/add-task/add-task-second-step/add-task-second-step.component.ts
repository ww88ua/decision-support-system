import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Alternative} from '../../../shared/models/alternative.model';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-task-second-step',
  templateUrl: './add-task-second-step.component.html',
  styleUrls: ['./add-task-second-step.component.sass']
})

export class AddTaskSecondStepComponent {

  rows: Array<string> = new Array('<div class="alternative">\n' +
    '      <input type="text" placeholder="Название альтернативы" #altName name="altName">\n' +
    '<i class="fa fa-times" aria-hidden="true" (click)="removeAlternative()"></i>\n' +
    '      <hr>\n' +
    '      <input type="text" placeholder="Описание альтернативы">\n' +
    '    </div>');


  alternatives: Array<Alternative> = new Array<Alternative>();

  constructor() { }

  addAlternative() {
    this.rows.push('<div class="alternative">\n' +
      '      <input type="text" placeholder="Название альтернативы" #altName name="altName">\n' +
      '<i class="fa fa-times" aria-hidden="true" (click)="removeAlternative()"></i>\n' +
      '      <hr>\n' +
      '      <input type="text" placeholder="Описание альтернативы">\n' +
      '    </div>');
  }

  removeAlternative(i: string) {
    const index = this.rows.indexOf(i);
    this.rows.splice(index,1);
  }

  saveData() {
    for (let i = 0; i < this.rows.length; i++) {
      const name = (<HTMLInputElement>document.getElementById('altName' + i)).value;
      const description = (<HTMLInputElement>document.getElementById('altDescr' + i)).value;
      const alternative: Alternative = new Alternative(name, description);
      this.alternatives.push(alternative);
    }

    window.localStorage.setItem('task-alternatives', JSON.stringify(this.alternatives));

  }



}
