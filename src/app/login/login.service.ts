import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from '../pages/users/user.service';

@Injectable()
export class LoginService {

  private loginUrl = '/api/login';  // URL to web api

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    console.log('login...');
    this.http.post<Result>(this.loginUrl, {
      username: username,
      password: password
    }).subscribe(
      err => console.log(err)
    );
  }
}
