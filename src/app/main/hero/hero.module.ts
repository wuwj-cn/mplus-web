import { NgModule }            from '@angular/core';

import { HeroComponent }       from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent }   from './hero-list.component';
import { HeroRoutingModule }   from './hero-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [ SharedModule, HeroRoutingModule ],
  declarations: [
    HeroComponent, HeroDetailComponent, HeroListComponent,
  ]
})
export class HeroModule { }
