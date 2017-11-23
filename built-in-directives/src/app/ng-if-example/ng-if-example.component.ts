import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-example',
  templateUrl: './ng-if-example.component.html',
  styleUrls: ['./ng-if-example.component.css']
})
export class NgIfExampleComponent implements OnInit {

	evenAnimal: string = "Elephant";
	oddAnimal: string = "Monkey";
	index: number = 0;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
  	this.index = this.index + 1;
  }

}
