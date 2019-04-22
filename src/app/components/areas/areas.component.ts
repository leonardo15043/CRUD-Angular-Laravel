import { Component, OnInit } from '@angular/core';
import { AreasService } from '../../services/areas.service';


@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {

  areas:any = [];

  constructor(
    private _areasService: AreasService
  ) {

    this._areasService.getAreas()
          .subscribe( areas => { 
              this.areas = areas;

              console.log(this.areas);
          });

  }

  ngOnInit() {
  }

  deleteArea( id , item) {

    this._areasService.deleteArea( id )
      .subscribe(respuesta => {
       console.log(id);
       delete this.areas[item];
        // if( respuesta ){
        //   console.error(respuesta);
        // }else{
        //   delete this.areas[id];
        // }
      });
  }

}
