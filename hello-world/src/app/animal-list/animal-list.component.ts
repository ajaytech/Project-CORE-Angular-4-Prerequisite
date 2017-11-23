import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
	animals: string[];

  constructor() {
  	this.animals = ['Elephant', 'Lion', 'Tiger', 'Alligator'];
  }

  ngOnInit() {
  }

}
