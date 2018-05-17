import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../shared/models/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})

export class AdminComponent implements OnInit{

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if (window.sessionStorage.getItem('user') === null) {
      this.router.navigate(['/login']);
    }
    const user: User = JSON.parse(window.sessionStorage.getItem('user'));
    if (!user.admin) {
      this.router.navigate(['/system', 'expert', 'tasks']);
    }
  }


}
