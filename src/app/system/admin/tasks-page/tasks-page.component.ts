import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../../shared/services/task.service';
import {Task} from '../../../shared/models/task.model';


@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.sass']
})
export class TasksPageComponent implements OnInit {

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

  removeTask(id: number) {
    const task: Task = this.tasks[id];
    this.tasks.splice(id,1);

    this.taskService.removeTask(task.id).subscribe(
      () => {},
      err => console.error(err)
    );
  }

}
