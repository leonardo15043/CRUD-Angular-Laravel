import { Component } from '@angular/core';
import { AreasService } from '../../services/areas.service';


@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent {

  areas: any = [];

  constructor(
    private _areasService: AreasService
  ) {

    this._areasService.getAreas()
          .subscribe( areas => {
              this.areas = areas;
          });

  }

  deleteArea( id, item ) {

    this._areasService.deleteArea( id )
      .subscribe(data => {
        if ( data ) {
          delete this.areas[item];
        } else {
          console.error(data);
        }
      });
  }

}
