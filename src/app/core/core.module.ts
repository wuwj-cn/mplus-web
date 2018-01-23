/* tslint:disable:member-ordering no-unused-variable */
import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf
} from '@angular/core';

import { MessageService } from './message.service';
import { UserService } from '../pages/users/user.service';

@NgModule({
  providers: [UserService, MessageService]
})
export class CoreModule {

  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  // static forRoot(config: UserServiceConfig): ModuleWithProviders {
  //   return {
  //     ngModule: CoreModule,
  //     providers: [
  //       { provide: UserServiceConfig, useValue: config }
  //     ]
  //   };
  // }
}
