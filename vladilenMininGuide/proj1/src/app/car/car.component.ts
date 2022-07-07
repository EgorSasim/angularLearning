import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carName: string = "Ford";
  carYear: number = 2015
  
  getName(): string {
    return this.carName;
  }

  constructor() { }

  ngOnInit(): void {
    console.log("create a car", this.carName);
  }

}
