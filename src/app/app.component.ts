import { Component  , OnInit} from '@angular/core';
import { LoginGuard } from './login.guard';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crud';
 
  showMenu: boolean = false;
 
  constructor(
     private loginGuard: LoginGuard
     ) {

  }

  ngOnInit() {
    this.loginGuard.userAuth.subscribe(
      show => this.showMenu = show
    );
  }

  out( evn: boolean ) {
    this.showMenu = evn;
  }

}
