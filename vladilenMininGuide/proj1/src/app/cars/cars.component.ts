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
  cars = ['Ford', 'Kia', 'Toyota', "Pegeot", "Mazda", "Porse"];

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

  setBigCarText(car : string): boolean{
    return car.length > 4 ? true : false;
  }

  ngOnInit(): void {
  }

}
