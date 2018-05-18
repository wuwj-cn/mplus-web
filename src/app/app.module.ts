/* Angular Imports */
import { NgModule, LOCALE_ID }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* App Imports */
import { AppComponent }   from './app.component';

/* Core Modules */
import { CoreModule }       from './core/core.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AuthGuard } from './shared/guard/auth.guard';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

// i18n
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // CoreModule.forRoot({userName: 'Miss Marple'}),
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    NgZorroAntdModule.forRoot()
  ],
  declarations: [ AppComponent],
  providers: [ AuthGuard, { provide: LOCALE_ID, useValue: 'zh' } ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
