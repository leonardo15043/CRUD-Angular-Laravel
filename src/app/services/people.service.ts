import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private url = environment.service.url;
  private access_token = environment.service.token;

  constructor(
    private http: HttpClient
  ) { }

  getPeople() {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);
    return this.http.get(`${ this.url }people`, { headers }).pipe( map( data => data ));
  }

  getPerson( id ) {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);
    return this.http.get(`${ this.url }people/${ id }`, { headers });
  }

  updatePerson( person: any , id) {
    let body = JSON.stringify(person);
    let headers = new HttpHeaders({ 'Content-Type':'application/json' }).set('Authorization', 'Bearer ' + this.access_token);
    return this.http.post(`${ this.url }people/edit/${ id }`, body , { headers });
  }

  savePerson(person: any) {
    let body = JSON.stringify(person);
    let headers = new HttpHeaders({ 'Content-Type':'application/json' }).set('Authorization', 'Bearer ' + this.access_token);
    return this.http.post(`${ this.url }people/add`, body , { headers });
  }

  deletePerson( id ) {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);
    return this.http.get(`${ this.url }people/delete/${ id }`, { headers }).pipe( map( res => res ));
  }

}
