import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people: any = [];

  constructor(
    private _peopleService: PeopleService
  ) {

    this._peopleService.getPeople()
    .subscribe( people => {
        this.people = people;
    });

   }

  ngOnInit() {
  }

  deletePerson( id , item) {

    this._peopleService.deletePerson( id )
      .subscribe(data => {
        if ( data ) {
          delete this.people[item];
        } else {
          console.error( data );
        }
      });

  }

}
