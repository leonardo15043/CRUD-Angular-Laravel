import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  error: any;

  constructor(
    private _userService: UserService,
    private router: Router
  ) {

  }

  ngOnInit() {
  }

  login(form: NgForm) {
    this._userService.getUser( form.value )
    .subscribe( data => {
  
       localStorage.setItem('id_user', data.user.id );
       localStorage.setItem('token', data.token );
       
       this.router.navigate(['/user']);

    },
    dataError => {
     
      console.error( dataError.error.error );
      if ( dataError.error.error == 'invalid_credentials' ) {
        this.error = 1;
      } else {
        this.error = 2;
      }

    });
  }

}
