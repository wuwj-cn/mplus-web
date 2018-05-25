import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent],
  providers: [ LoginService ]
})
export class LoginModule { }
