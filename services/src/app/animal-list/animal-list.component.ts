import { Component, OnInit } from '@angular/core';
import { AnimalEditService } from '../animal-edit.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
	animals: any[] = [];

  constructor(private animalEditService: AnimalEditService) { }

  ngOnInit() {
  	this.getAnimals();
  }

  getAnimals() {
  	this.animals = this.animalEditService.getAnimals();
  }

  addAnimal(animalId, animalName, animalPic) {
  	this.animals = this.animalEditService.addAnimals(animalId, animalName, animalPic);
  }

}
