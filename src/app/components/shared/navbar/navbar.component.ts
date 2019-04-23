import { Component, OnInit , Output , EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { OutsideGuard } from '../../../outside.guard';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() menEvn: EventEmitter<boolean>;

  constructor(
    private router: Router,
    private outsideGuard: OutsideGuard
  ) {
    this.menEvn = new EventEmitter();
  }

  ngOnInit() {

  }

  logout() {
    this.menEvn.emit(false);
    localStorage.removeItem('token');
    localStorage.removeItem('id_user');
    this.router.navigate(['/login']);
  }

}
