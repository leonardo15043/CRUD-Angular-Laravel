import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreasComponent } from './components/areas/areas.component';
import { AreaComponent } from './components/areas/area.component';
import { PeopleComponent } from './components/people/people.component';
import { PersonComponent } from './components/people/person.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';

import { LoginGuard } from './login.guard';
import { OutsideGuard } from './outside.guard';


const APP_ROUTES: Routes = [
    { path: 'areas', component: AreasComponent , canActivate: [LoginGuard]},
    { path: 'area/:id', component: AreaComponent , canActivate: [LoginGuard]},
    { path: 'people', component: PeopleComponent , canActivate: [LoginGuard]},
    { path: 'person/:id', component: PersonComponent , canActivate: [LoginGuard]},
    { path: 'login', component: LoginComponent , canActivate: [OutsideGuard]},
    { path: 'user', component: UserComponent , canActivate: [LoginGuard]},
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];


@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
