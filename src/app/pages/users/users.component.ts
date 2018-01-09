import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [routerTransition()]
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
