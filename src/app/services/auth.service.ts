import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.service.url;

  constructor(
    private http: HttpClient
  ) { }

  getLogin( user ) {
    return this.http.post<any>(`${ this.url }login` , user).pipe( map( data => data ));
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
