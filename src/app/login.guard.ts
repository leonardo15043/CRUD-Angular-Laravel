import { Injectable , EventEmitter} from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot , Router} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  userAuth = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private _userService: UserService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (localStorage.getItem('token') === null) {
        this.router.navigate(['/login']);
        this.userAuth.emit(false);
        return false;
      } else {
        this.userAuth.emit(true);
        return true;
      }

  }
}