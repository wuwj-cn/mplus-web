import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, private loginService: LoginService) { }

  ngOnInit() { }

  onLoggedin() {
    this.loginService.login('wuwj', '123456');
    localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/']);
  }

}
