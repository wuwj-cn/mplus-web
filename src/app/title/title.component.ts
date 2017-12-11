import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styles: []
})
export class TitleComponent implements OnInit {

  constructor(userService: UserService) { 
    this.user = userService.userName;
  }

  ngOnInit() {
  }


  title = 'Angular Modules';
  user = '';

}
