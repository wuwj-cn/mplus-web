/* tslint:disable:member-ordering no-unused-variable */
import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf
} from '@angular/core';

import { MessageService } from './message.service';
import { MP_I18N } from '../i18n/mp-i18n.token';
import zh_CN from '../i18n/languages/zh_CN';
import { MP_I18N_SERVICE_PROVIDER } from '../i18n/mp-i18n.service';

/**
 * 只能在根模块 AppModule 中导入 CoreModule
 * 永远不要在除根模块 AppModule 之外的任何模块中导入 CoreModule
 * 把 CoreModule 做成一个没有 declarations 的纯服务模块，在启动时加载
 */
@NgModule({
  providers: [
    MessageService,
    { provide: MP_I18N, useValue: zh_CN },
    MP_I18N_SERVICE_PROVIDER,
  ]
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
