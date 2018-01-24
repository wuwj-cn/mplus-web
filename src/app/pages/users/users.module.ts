import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';

@NgModule({
  imports: [
    SharedModule,
    UsersRoutingModule,
    PageHeaderModule,
    ReactiveFormsModule
  ],
  declarations: [UsersComponent],
  providers:[ UserService ]
})
export class UsersModule { }
