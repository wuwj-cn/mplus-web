import { NgModule } from '@angular/core';
import { MenuRoutingModule } from './menu-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu.component';
import { MenuFormComponent } from './menu-form/menu-form.component';
import { MenuService } from './menu.service';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    MenuRoutingModule
  ],
  declarations: [ MenuComponent, MenuFormComponent ],
  entryComponents: [MenuFormComponent],
  providers: [MenuService]
})
export class MenuModule { }
