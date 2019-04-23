import { Injectable , EventEmitter} from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OutsideGuard implements CanActivate {

  userAuth = new EventEmitter<boolean>();

  constructor(
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (localStorage.getItem('token') === null) {
        this.userAuth.emit(true);
        return true;
      } else {
        this.router.navigate(['/user']);
        this.userAuth.emit(true);
        return false;
      }

  }
}
