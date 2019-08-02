import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css'],
  animations: [routerTransition()]
})
export class ModuleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
