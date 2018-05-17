import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task-first-step',
  templateUrl: './add-task-first-step.component.html',
  styleUrls: ['./add-task-first-step.component.sass']
})
export class AddTaskFirstStepComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  saveData(name: string, desctiption: string) {
    window.localStorage.setItem('task-name', name);
    window.localStorage.setItem('task-description', desctiption);
  }

}
