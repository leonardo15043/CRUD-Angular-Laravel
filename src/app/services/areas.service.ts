import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AreasService {

  private url = environment.service.url;
  private access_token = environment.service.token;

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
