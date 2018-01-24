import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from '../../core/message.service';
import { Result } from '../../core/result';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  private usersUrl = '/api/user';  // URL to web api

  constructor(private http: HttpClient, private msg: MessageService) { }

  getUser() {
    const url = `${this.usersUrl}/getOne/U10018`;
    this.http.get<Result>(url).subscribe();
  }

}
