import { NgModule } from '@angular/core';

import { ArchiveRoutingModule } from './archive-routing.module';
import { ArchiveComponent } from './archive.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ArchiveRoutingModule
  ],
  declarations: [ArchiveComponent]
})
export class ArchiveModule { }
