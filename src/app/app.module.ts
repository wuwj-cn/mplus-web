/* Angular Imports */
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

/* App Imports */
import { AppComponent }   from './app.component';

/* Core Modules */
import { CoreModule }       from './core/core.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule.forRoot({userName: 'Miss Marple'}),
    AppRoutingModule,
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
