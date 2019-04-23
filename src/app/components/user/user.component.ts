import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userd:any = [];

  constructor(
    private _userService: UserService
  ) {

    let idUser = localStorage.getItem('id_user');

    this._userService.getDataUser(idUser)
    .subscribe( user => {
       this.userd = user;
    });

  }

  ngOnInit() {
  }


}
