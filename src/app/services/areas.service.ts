import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AreasService {

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

  getArea( id ) {
    return this.http.get(`${ this.url }areas/${ id }`, { headers: this.headers });
  }

  getAreas() {
    return this.http.get(`${ this.url }areas`, {  headers: this.headers  }).pipe( map( data => data ));
  }

  updateArea( area: any , id) {
    let body = JSON.stringify(area);
    return this.http.post(`${ this.url }areas/edit/${ id }`, body , {  headers: this.headers });
  }

  saveArea(area: any) {
    let body = JSON.stringify(area);
    return this.http.post(`${ this.url }areas/add`, body , { headers: this.headers });
  }

  deleteArea( id ) {
    return this.http.get(`${ this.url }areas/delete/${ id }`, { headers: this.headers }).pipe( map( res => res ));
  }


}
