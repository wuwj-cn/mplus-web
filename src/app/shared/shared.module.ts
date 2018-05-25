import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MpI18nPipe } from '../i18n/mp-i18n.pipe';

/**
 * 包含在应用中共享使用的组件、指令和管道
 * ShareModule应该只包含declarations, 并且应该导出几乎所有declarations里的声明
 */

@NgModule({
  declarations: [
    MpI18nPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    MpI18nPipe
  ]
})
export class SharedModule { }
