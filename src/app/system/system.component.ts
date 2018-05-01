import {Component, OnInit} from '@angular/core';
import {User} from '../shared/models/user.model';
import {Router} from '@angular/router';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html'
})

export class SystemComponent implements OnInit{

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if (window.sessionStorage.getItem('user') === null) {
      this.router.navigate(['/login']);
    }
  }


}
