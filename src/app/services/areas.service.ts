import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  private url = 'http://127.0.0.1:8000/api/';
  private access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvbG9naW4iLCJpYXQiOjE1NTU5NzE5MDgsImV4cCI6MTU1NTk3NTUwOCwibmJmIjoxNTU1OTcxOTA4LCJqdGkiOiJVcno4bnE5T29ZOFpHaWFxIn0.2C1EUjEMcsq_rxzNcMfPxOmt012-rQYlZU-b5P9uoGE';

  
  constructor(
    private http: HttpClient
  ) { }


  getArea( id ) {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);
    return this.http.get(`${ this.url }areas/${ id }`, { headers });
  }

  getAreas() {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);
    return this.http.get(`${ this.url }areas`, { headers }).pipe( map( data => data ));
  }

  updateArea( area: any , id) {
    let body = JSON.stringify(area);
    let headers = new HttpHeaders({ 'Content-Type':'application/json' }).set('Authorization', 'Bearer ' + this.access_token);
    return this.http.post(`${ this.url }areas/edit/${ id }`, body , { headers });
  }

  saveArea(area: any) {
    let body = JSON.stringify(area);
    let headers = new HttpHeaders({ 'Content-Type':'application/json' }).set('Authorization', 'Bearer ' + this.access_token);
    return this.http.post(`${ this.url }areas/add`, body , { headers });
  }

  deleteArea( id ) {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);
    return this.http.get(`${ this.url }areas/delete/${ id }`, { headers }).pipe( map( res => res ));
  }


}
