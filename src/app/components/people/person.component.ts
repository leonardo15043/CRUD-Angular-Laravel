import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { CountryService } from '../../services/country.service';
import { AreasService } from '../../services/areas.service';

import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  person: any = {};
  country: any = [];
  areas: any = [];
  id: any;

  constructor(
    private _peopleService: PeopleService,
    private _countryService: CountryService,
    private activatedRoute: ActivatedRoute,
    private _areasService: AreasService,
    private router: Router,
  ) {

    this.activatedRoute.params
    .subscribe( params => {
      this.id = params['id'];
      if ( this.id !== 'nuevo') {
        this.getPerson( this.id );
      }
    });

    this._countryService.getCountry()
    .subscribe( country => {
      console.log(country);
        this.country = country;
    });

    this._areasService.getAreas()
    .subscribe( areas => {
        this.areas = areas;
    });

  }

  ngOnInit() {
  }

  getPerson( id: string) {
    this._peopleService.getPerson( id )
      .subscribe( person => {
        this.person = person;
      });
  }

  savePerson() {

    if (this.id == 'nuevo') {

      console.log(this.person);

      this._peopleService.savePerson(this.person)
      .subscribe( data => {
         this.router.navigate(['/people']);
      },
      error => console.error(error));

    } else {

      this._peopleService.updatePerson(this.person, this.id )
      .subscribe( data => {
        this.router.navigate(['/people']);
      },
      error => console.error(error));

    }

  }

  addNew( forma: NgForm ) {
    this.router.navigate(['/person', 'nuevo']);
    forma.reset();
  }

}
