// Exact copy except import UserService from core
import { Component }   from '@angular/core';

import { HeroService } from './hero.service';

@Component({
  template: `
    <h2>Heroes of {{userName}}</h2>
    <router-outlet></router-outlet>
  `,
  providers: [ HeroService ]
})
export class HeroComponent {
  userName = '';
  constructor() { }
}
