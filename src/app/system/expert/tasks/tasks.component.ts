import { Component, OnInit } from '@angular/core';
import {Task} from '../../../shared/models/task.model';
import {TaskService} from '../../../shared/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {

  constructor(
    private taskService: TaskService,
  ) { }

  tasks: Task[];

  ngOnInit() {
    this.taskService.getTaskList()
      .subscribe((customList: Task[]) => {
        this.tasks = customList;
      });
  }

}
