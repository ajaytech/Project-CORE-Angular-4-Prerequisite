import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent implements OnInit {
	animal = {
		like: '',
		likeLess: '',
		favourite: ''
	};

  constructor() { }

  ngOnInit() {
  }

  submitForm(like, likeLess) {
  	this.animal.like = like;
  	this.animal.likeLess = likeLess;
  }
}
