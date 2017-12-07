import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isActive: boolean = false;
  showMenu: string = '';

  eventCalled() {
      this.isActive = !this.isActive;
  }

  addExpandClass(element: any) {
      if (element === this.showMenu) {
          this.showMenu = '0';
      } else {
          this.showMenu = element;
      }
  }

}
