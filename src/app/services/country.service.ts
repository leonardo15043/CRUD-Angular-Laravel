import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private url = 'http://127.0.0.1:8000/api/';
  private access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvbG9naW4iLCJpYXQiOjE1NTU5OTIzMDMsImV4cCI6MTU1NTk5NTkwMywibmJmIjoxNTU1OTkyMzAzLCJqdGkiOiJRZDRReTJxWEJQN1ZYeUZIIn0.bWNwE8DswtLtdp2IUqkz5byywor0tM6ZLXulpxKdl-A';


  constructor(
    private http: HttpClient
  ) { }

  getCountry() {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);
    return this.http.get(`${ this.url }country`, { headers }).pipe( map( data => data ));
  }


}
