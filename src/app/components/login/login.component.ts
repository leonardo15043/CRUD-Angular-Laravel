import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  error: any;

  constructor(
    private _authService: AuthService,
    private router: Router
  ) { }

  login(form: NgForm) {

    this._authService.getLogin( form.value )
    .subscribe( data => {

      localStorage.setItem('id_user', data.user.id );
      localStorage.setItem('token', data.token );
      this.router.navigate(['/user']);

    },
    dataError => {

      if ( dataError.error.error == 'invalid_credentials' ) {
        this.error = 1;
      } else {
        this.error = 2;
      }

    });

  }

}
