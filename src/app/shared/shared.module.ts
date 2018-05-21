import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AwesomePipe } from './awesome.pipe';
import { HighlightDirective } from './highlight.directive';

import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // TranslateModule,
    NgZorroAntdModule
  ],
  declarations: [
    AwesomePipe,
    HighlightDirective
  ],
  exports: [
    AwesomePipe,
    // HighlightDirective,
    CommonModule,
    FormsModule,
    // TranslateModule,
    NgZorroAntdModule
  ]
})
export class SharedModule { }
