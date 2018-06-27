import { NgModule } from '@angular/core';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuFormComponent } from './menu-form/menu-form.component';

@NgModule({
  imports: [
    SharedModule,
    MenuRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MenuComponent, MenuFormComponent],
  entryComponents: [MenuFormComponent]
})
export class MenuModule { }
