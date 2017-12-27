import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { ContactComponent }    from './contact.component';

const routes = [
  { path: '', component: ContactComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ContactRoutingModule {}
