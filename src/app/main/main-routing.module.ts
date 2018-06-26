import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '', redirectTo: 'user' },
      { path: 'menu', loadChildren: '../modules/menu/menu.module#MenuModule' },
      { path: 'user', loadChildren: '../modules/users/users.module#UsersModule' },
      { path: 'archive', loadChildren: '../modules/archive/archive.module#ArchiveModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
