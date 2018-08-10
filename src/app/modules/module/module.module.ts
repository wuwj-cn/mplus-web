import { NgModule } from '@angular/core';
import { ModuleRoutingModule } from './module-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ModuleComponent } from './module.component';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    ModuleRoutingModule
  ],
  declarations: [ ModuleComponent ]
})
export class ModuleModule { }
