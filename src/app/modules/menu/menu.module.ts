import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    MenuRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MenuComponent]
})
export class MenuModule { }
