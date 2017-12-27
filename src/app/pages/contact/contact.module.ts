import { NgModule }           from '@angular/core';

import { ContactComponent }     from './contact.component';
import { ContactService }       from './contact.service';
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { StatModule } from '../../shared/modules/stat/stat.module';

@NgModule({
  imports: [
    SharedModule,
    PageHeaderModule,
    StatModule,
    ContactRoutingModule
  ],
  declarations: [ ContactComponent ],
  providers:    [ ContactService ]
})
export class ContactModule { }
