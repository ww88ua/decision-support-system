import { Component, OnInit } from '@angular/core';
import {Task} from '../../shared/models/task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.sass']
})
export class AddTaskComponent implements OnInit {

  task: Task;

  constructor() { }

  ngOnInit() {
  }

}
