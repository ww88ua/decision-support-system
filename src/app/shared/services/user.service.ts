import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user.model';
import {HttpClient, } from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUserForLogin(email: string, password: string) {
    return this.http.get(`http://localhost:8080/auth/login?email=${email}&password=${password}`);
  }

  getUserByEmail(email: string) {
    return this.http.get(`http://localhost:8080/user?email=${email}`);
  }

  getUserById(id: number) {
    return this.http.get(`http://localhost:8080/user/get/${id}`);
  }

  addNewUser(user: User) {
    return this.http.post(`http://localhost:8080/users/add`, JSON.stringify(user), {headers: {'Content-Type': 'application/json'}}).
    subscribe(
      () => {},
      err => console.error(err)
    );
  }

  getAllExperts() {
    return this.http.get(`http://localhost:8080/users/all`);
  }

}
