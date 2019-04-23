import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AreasComponent } from './components/areas/areas.component';
import { PeopleComponent } from './components/people/people.component';
import { LoginComponent } from './components/login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { AreaComponent } from './components/areas/area.component';

import { FormsModule } from '@angular/forms';
import { KeysPipe } from './pipes/keys.pipe';
import { PersonComponent } from './components/people/person.component';
import { UserComponent } from './components/user/user.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AreasComponent,
    PeopleComponent,
    LoginComponent,
    AreaComponent,
    KeysPipe,
    PersonComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
