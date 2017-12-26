import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    TranslateModule,
    NgbDropdownModule.forRoot()
  ],
  declarations: [MainComponent, HeaderComponent, SidebarComponent]
})
export class MainModule { }
