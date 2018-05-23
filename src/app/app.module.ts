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

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { AuthGuard } from './core/guard/auth.guard';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // CoreModule.forRoot({userName: 'Miss Marple'}),
    CoreModule,
    AppRoutingModule,
    NgZorroAntdModule.forRoot()
  ],
  declarations: [ AppComponent],
  providers: [ AuthGuard],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
