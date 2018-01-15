import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { GridOptions } from 'ag-grid';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [routerTransition()]
})
export class UsersComponent implements OnInit {
  private page = 1;
  private totalSize = 50;
  private users: any[];
  private pageSize = 10;

  constructor() {
    this.users = [
      {username: 'wuwj', email: 'wenjie.0617@gmail.com', fullname: 'wuwenjie'},
      {username: 'wuwj', email: 'wenjie.0617@gmail.com', fullname: 'wuwenjie'},
      {username: 'wuwj', email: 'wenjie.0617@gmail.com', fullname: 'wuwenjie'},
      {username: 'wuwj', email: 'wenjie.0617@gmail.com', fullname: 'wuwenjie'},
      {username: 'wuwj', email: 'wenjie.0617@gmail.com', fullname: 'wuwenjie'}

    ]

    // this.totle = this.users.length;
  }

  ngOnInit() {
  }

  onPageSizeChange(pageSize: number) {
    this.pageSize = pageSize;
    console.log("page size changed....");
  }

}
