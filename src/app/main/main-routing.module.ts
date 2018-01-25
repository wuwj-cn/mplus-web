import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '', redirectTo: 'user' },
      { path: 'dashboard', loadChildren: '../pages/dashboard/dashboard.module#DashboardModule' },
      { path: 'crisis', loadChildren: '../pages/crisis/crisis.module#CrisisModule' },
      { path: 'heroes', loadChildren: '../pages/hero/hero.module#HeroModule' },
      { path: 'contact', loadChildren: '../pages/contact/contact.module#ContactModule' },
      { path: 'user', loadChildren: '../pages/users/users.module#UsersModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
