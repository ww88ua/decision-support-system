import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/models/user.model';
import {Message} from '../../shared/models/message.module';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    const user: User = JSON.parse(window.sessionStorage.getItem('user'));
    if (user !== null && user.admin) {
      this.router.navigate(['/system/admin/tasks']);
    } else if (user !== null && !user.admin) {
      this.router.navigate(['/system/expert/tasks']);
    }

    this.message = new Message('danger', '');
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
    });
  }

  private showMessage(text: string, type: string = 'danger') {
    this.message = new Message(type, text);
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }

  onSubmit() {
    const formData = this.form.value;

    this.userService.getUserForLogin(formData.email, formData.password)
      .subscribe((user: User) =>  {
        if (user) {
          if (user.password === formData.password) {
            this.message.text = '';
            window.sessionStorage.setItem('user', JSON.stringify(user));
            this.authService.login();
            this.router.navigate(['/system','admin','tasks']);
          } else {
            this.showMessage('Такого пользователя не существует');
          }
        } else {
          this.showMessage('Такого пользователя не существует');
        }
      });
  }

}
