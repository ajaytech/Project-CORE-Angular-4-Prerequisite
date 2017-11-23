import { Component } from '@angular/core';
import { FetchDogsService } from './fetch-dogs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Random Dog Pic with HTTP';
  dogPic: string = '';

  constructor(private fetchDogsService: FetchDogsService) {
  	this.getNewDog();
  }

  getNewDog() {
  	this.fetchDogsService.getNewDog().subscribe(response => this.dogPic = response.message);
  }
}
