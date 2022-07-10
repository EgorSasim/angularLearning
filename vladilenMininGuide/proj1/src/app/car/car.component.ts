import { Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input() carItem?: {name: string, year: number};
  @ContentChild('carHeading') carHeading?: ElementRef;

  ngAfterViewInit() { 
    console.log(this.carHeading?.nativeElement.innerText);
  }

  ngOnInit(): void {
  }

}
