import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.service.url;
  private access_token = environment.service.token;

  constructor(
    private http: HttpClient
  ) { }

  getUser( user ) {
    return this.http.post(`${ this.url }login` , user).pipe( map( data => data ));
  }

  getDataUser( id ) {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);
    return this.http.get(`${ this.url }user/${ id }`, { headers });
  }

}
