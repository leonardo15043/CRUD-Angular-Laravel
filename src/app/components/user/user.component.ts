import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  userd: any = [];

  constructor(
    private _userService: UserService,
    private _authService: AuthService
  ) {

    const idUser = localStorage.getItem('id_user');

    if ( idUser ) {

      this._userService.getDataUser(idUser)
      .subscribe( user => {
         this.userd = user;
      });

    }

  }

}
