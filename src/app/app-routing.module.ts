import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreasComponent } from './components/areas/areas.component';
import { AreaComponent } from './components/areas/area.component';
import { PeopleComponent } from './components/people/people.component';

const APP_ROUTES: Routes = [
    { path: 'areas', component: AreasComponent },
    { path: 'area/:id', component: AreaComponent },
    { path: 'people', component: PeopleComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
