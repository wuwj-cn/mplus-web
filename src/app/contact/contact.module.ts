import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { AwesomePipe }        from './awesome.pipe';
import { ContactComponent }   from './contact.component';
import { ContactHighlightDirective } from './contact-highlight.directive';
import { ContactService }     from './contact.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AwesomePipe,
    ContactComponent,
    ContactHighlightDirective
  ],
  exports:   [ ContactComponent ],
  providers: [ ContactService ]
})
export class ContactModule { }