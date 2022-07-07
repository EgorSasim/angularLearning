import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  isPassiveBtn = true;
  addCarStatus = '';
  name = "";

  constructor() { 
    setTimeout(() => {
      this.isPassiveBtn = false;
    }, 2000);
  }

  chngName(event: string): void {
    this.name = event;
  }

  addCar(): void {
    this.addCarStatus = "Add new car";
  }

  ngOnInit(): void {
  }

}
