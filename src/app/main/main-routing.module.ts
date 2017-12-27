import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '', redirectTo: 'dashboard' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'crisis', loadChildren: './crisis/crisis.module#CrisisModule' },
      { path: 'heroes', loadChildren: './hero/hero.module#HeroModule' },
      { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
