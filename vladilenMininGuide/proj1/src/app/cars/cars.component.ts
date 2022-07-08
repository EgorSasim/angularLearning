import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  isPassiveBtn = true;
  carName = "";
  addCarStatus = false;
  cars = ['Ford', 'Kia', 'Toyota'];
  elements = [{id: 45, name: 'item1'}, {id: 345, name: 'item2'}, {id: 923, name: 'item3'}];

  constructor() { 
    setTimeout(() => {
      this.isPassiveBtn = false;
    }, 2000);
  }


  addCar(): void {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = "";
  }

  ngOnInit(): void {
  }

}
