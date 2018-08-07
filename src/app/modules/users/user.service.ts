import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { MessageService } from '../../core/message.service';
import { Result } from '../../core/result';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export class User {
  constructor(
    public userId: string,
    public userCode: string,
    public username: string,
    public name: string,
    public email: string
  ) { }
}

@Injectable()
export class UserService {

  private usersUrl = 'api/user';  // URL to web api

  constructor(private http: HttpClient, private msg: MessageService) { }

  getUser(usercode: string) {
    const url = `${this.usersUrl}/getOne/${usercode}`;
    return this.http.get<Result>(url).pipe(
      map(result => {
        if (result.success) return result.data;
        throw result.data;
      }),
      catchError(this.msg.handleError<User>("getUser"))
    )
  }

}
