import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { LoginComponent } from './login/login.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { HighlightDirective } from './highlight.directive';
import { TitleComponent } from './title/title.component';
import { UserService } from './user.service';
import { ContactComponent } from './contact/contact.component';
import { AwesomePipe } from './contact/awesome.pipe';
import { ContactService } from './contact/contact.service';
import { ContactHighlightDirective } from './contact/contact-highlight.directive';
import { ContactModule } from './contact/contact.module';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    LoginComponent,
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    HighlightDirective,
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    NgbModule.forRoot(),

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

    ContactModule 
  ],
  providers: [HeroService, MessageService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
