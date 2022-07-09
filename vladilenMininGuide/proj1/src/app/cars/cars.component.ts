import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class CarsComponent {


  cars: {name: string, year: number}[] = [{
    name: 'Ford',
    year: 2015
  }, {
    name: 'Mazda',
    year: 2010,
  }, {
    name: 'Audi',
    year: 2013,
  }
];
  constructor() { }

  updateCarList(car: {name: string, year: number}): void {  
    this.cars.push(car);
    }

}