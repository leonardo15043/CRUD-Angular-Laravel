import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private url = environment.service.url;
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.append('Content-Type', 'application/json');
    this.headers = this.headers.append('Authorization', 'Bearer ' + this.authService.getToken());
  }

  getPeople() {
    return this.http.get(`${ this.url }people`, {  headers: this.headers  }).pipe( map( data => data ));
  }

  getPerson( id ) {
    return this.http.get(`${ this.url }people/${ id }`, {  headers: this.headers  });
  }

  updatePerson( person: any , id) {
    let body = JSON.stringify(person);
    return this.http.post(`${ this.url }people/edit/${ id }`, body , {  headers: this.headers });
  }

  savePerson(person: any) {
    let body = JSON.stringify(person);
    return this.http.post(`${ this.url }people/add`, body , {  headers: this.headers });
  }

  deletePerson( id ) {
    return this.http.get(`${ this.url }people/delete/${ id }`, {  headers: this.headers }).pipe( map( res => res ));
  }

}
