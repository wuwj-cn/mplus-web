import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    UsersRoutingModule,
    PageHeaderModule
  ],
  declarations: [UsersComponent]
})
export class UsersModule { }
