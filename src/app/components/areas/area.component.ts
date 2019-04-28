import { Component, OnInit } from '@angular/core';
import { AreasService } from '../../services/areas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  area: any = {};
  id: any;

  constructor(
    private _areasService: AreasService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {

    this.activatedRoute.params
    .subscribe( params => {
      this.id = params['id'];
      if( this.id !== "nuevo") {
        this.getArea( this.id );
      }
    });


  }

  ngOnInit() {
  }


  getArea( id: string) {
    this._areasService.getArea( id )
      .subscribe( area => {
        this.area = area;
      });
  }

  saveArea() {

    if (this.id == "nuevo") {

      this._areasService.saveArea(this.area)
      .subscribe( data => {
         this.router.navigate(['/areas']);
      },
      error => console.error(error));

    } else {

      this._areasService.updateArea(this.area, this.id )
      .subscribe( data => {
        this.router.navigate(['/areas']);
      },
      error => console.error(error));

    }

  }

  addNew( forma: NgForm ) {
    this.router.navigate(['/area', 'nuevo']);
    forma.reset();
  }

}
