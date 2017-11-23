import { Injectable } from '@angular/core';
import { ANIMALS } from './animals';

@Injectable()
export class AnimalEditService {
	animals: any[];

  constructor() {
  	this.animals = ANIMALS;
  }

  getAnimals() {
  	return this.animals;
  }

  addAnimals(animalId, animalName, animalPic) {
  	this.animals.push({id: animalId, name: animalName, pic: animalPic});
  	return this.getAnimals();
  }

}
