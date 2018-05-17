import { Component, OnInit } from '@angular/core';
import {Task} from '../../../../shared/models/task.model';
import {TaskService} from '../../../../shared/services/task.service';
import {UserService} from '../../../../shared/services/user.service';
import {User} from '../../../../shared/models/user.model';

@Component({
  selector: 'app-add-task-fourth-step',
  templateUrl: './add-task-fourth-step.component.html',
  styleUrls: ['./add-task-fourth-step.component.sass']
})
export class AddTaskFourthStepComponent implements OnInit {

  isClassVisible: false;
  experts: User[];
  hightlightStatus: Array<boolean> = [];
  selectedExperts: Array<number> = [];

  constructor(
    private taskService: TaskService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getAllExperts()
      .subscribe((customList: User[]) => {
        this.experts = customList;
      });
  }

  addExpert() {
    const name = (<HTMLInputElement>document.getElementById('userName')).value;
    const email = (<HTMLInputElement>document.getElementById('userEmail')).value;
    const password = this.makePasswrod();

    const user: User = new User(email, password, name, false);
    this.userService.addNewUser(user);

    let userAdded: User;
    this.userService.getUserByEmail(email)
      .subscribe((addedUser: User) => {
        userAdded = addedUser;
      });
  }

  makePasswrod(): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';


    for (let i = 0; i < 8; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  selectExpert(id: number) {
    if (this.selectedExperts.includes(id)) {
      this.selectedExperts.splice(this.selectedExperts.indexOf(id),1);
    } else {
      this.selectedExperts.push(id);
    }
  }



  saveData() {
    const taskName = window.localStorage.getItem('task-name');
    const taskDescription = window.localStorage.getItem('task-description');
    const taskAlternatives = JSON.parse(window.localStorage.getItem('task-alternatives'));
    const taskCriterias = JSON.parse(window.localStorage.getItem('task-criterias'));
    let users: Array<User> = new Array<User>();
    for (let i = 0; i < this.selectedExperts.length; i++) {
      const id: number = this.selectedExperts[i];
      let user: User;
      this.userService.getUserById(id).subscribe((addedUser: User) => {
        user = addedUser;
        users.push(user);
      });

    }

    const task: Task = new Task(taskName, taskDescription, taskAlternatives, taskCriterias, users);
    this.taskService.saveTask(task)
      .subscribe((addedTask: Task) => {
        console.log(task);
      });
  }

}
