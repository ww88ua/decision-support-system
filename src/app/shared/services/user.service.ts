import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user.model';
import {HttpClient, } from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUserByEmail(email: string, password: string) {
    return this.http.get(`http://localhost:8080/auth/login?email=${email}&password=${password}`);
  }
}
