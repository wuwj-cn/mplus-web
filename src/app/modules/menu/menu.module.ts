import { NgModule } from '@angular/core';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuFormComponent } from './menu-form/menu-form.component';
import { MenuService } from './menu.service';

@NgModule({
  imports: [
    SharedModule,
    MenuRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MenuComponent, MenuFormComponent],
  entryComponents: [MenuFormComponent],
  providers: [MenuService]
})
export class MenuModule { }
