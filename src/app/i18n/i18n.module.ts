import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MpI18nService, MP_I18N_SERVICE_PROVIDER } from './mp-i18n.service';
import { MpI18nPipe } from './mp-i18n.pipe';
import { MP_I18N } from './mp-i18n.token';
import zh_CN from './languages/zh_CN';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MpI18nPipe],
  exports     : [ MpI18nPipe ],
  providers   : [
    { provide: MP_I18N, useValue: zh_CN },
    MP_I18N_SERVICE_PROVIDER
  ]
})
export class I18nModule { }
