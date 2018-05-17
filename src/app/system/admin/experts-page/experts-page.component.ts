import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {User} from '../../../shared/models/user.model';
import {UserService} from '../../../shared/services/user.service';


@Component({
  selector: 'app-experts-page',
  templateUrl: './experts-page.component.html',
  styleUrls: ['./experts-page.component.sass']
})
export class ExpertsPageComponent implements OnInit {

  isClassVisible: true;
  experts: User[];

  constructor(
    private userService: UserService,
  ) {}


  addExpert() {
    const name = (<HTMLInputElement>document.getElementById('userName')).value;
    const email = (<HTMLInputElement>document.getElementById('userEmail')).value;
    const password = this.makePasswrod();

    const user: User = new User(email, password, name, false);
    this.userService.addNewUser(user);
  }

  ngOnInit(): void {
    this.userService.getAllExperts()
      .subscribe((customList: User[]) => {
      this.experts = customList;
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


}


