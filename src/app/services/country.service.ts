import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private url = environment.service.url;
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.append('Authorization', 'Bearer ' + this.authService.getToken());
  }

  getCountry() {
    return this.http.get(`${ this.url }country`, { headers: this.headers }).pipe( map( data => data ));
  }


}
