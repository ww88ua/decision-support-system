import { Injectable } from '@angular/core';

import {HttpClient, } from '@angular/common/http';
import {Task} from '../models/task.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TaskService {

  tasks: Array<Task>;

  constructor(
    private http: HttpClient
  ) {}

  saveTask(task: Task) {
    console.log(task.selectedExperts);
    return this.http.post(`http://localhost:8080/task/add`, task, {headers: {'Content-Type': 'application/json'}});
  }

  getTaskList() {
    return this.http.get(`http://localhost:8080/task/all`);

  }

  getTasks() {
    return this.tasks;
  }

  getTaskById(id: string) {
    return this.http.get(`http://localhost:8080/task/get/${id}`);
  }

  removeTask(id: number) {
    return this.http.delete(`http://localhost:8080/task/delete/${id}`);
  }
}
