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

  constructor() { 
    setTimeout(() => {
      this.isPassiveBtn = false;
    }, 2000);
  }


  addCar(): void {
    this.addCarStatus = true;
  }

  ngOnInit(): void {
  }

}
