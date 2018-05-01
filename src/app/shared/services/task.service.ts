import { Injectable } from '@angular/core';

import {HttpClient, } from '@angular/common/http';
import {Task} from '../models/task.model';

@Injectable()
export class TaskService {
  constructor(
    private http: HttpClient
  ) {}

  saveTask(task: Task) {
    this.http.post(`http://localhost:8080/task/add`, JSON.stringify(task), {headers: {'Content-Type': 'application/json'}});
  }
}
