import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private url = environment.service.url;
  private access_token = environment.service.token;

  constructor(
    private http: HttpClient
  ) { }

  getCountry() {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);
    return this.http.get(`${ this.url }country`, { headers }).pipe( map( data => data ));
  }


}
