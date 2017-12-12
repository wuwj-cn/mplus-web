import { NgModule } from "@angular/core";
import { ContactComponent } from "./contact.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: 'contact', component: ContactComponent}
  ];
  
  @NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
  export class ContactRoutingModule {}