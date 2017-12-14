import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactModule }    from './contact/contact.module';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
  { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
];

@NgModule({
  imports: [
    ContactModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
