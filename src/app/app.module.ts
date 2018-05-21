/* Angular Imports */
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* App Imports */
import { AppComponent }   from './app.component';

/* Core Modules */
import { CoreModule }       from './core/core.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

import { AuthGuard } from './shared/guard/auth.guard';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MP_I18N } from './i18n/mp-i18n.token';
import zh_CN from './i18n/languages/zh_CN';
import { I18nModule } from './i18n/i18n.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // CoreModule.forRoot({userName: 'Miss Marple'}),
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    I18nModule,
    NgZorroAntdModule.forRoot()
  ],
  declarations: [ AppComponent],
  providers: [ AuthGuard, { provide: MP_I18N, useValue: zh_CN } ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
