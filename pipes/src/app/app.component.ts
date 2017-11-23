import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Animal List using Pipes';
  animals = ["Elephant", "Lion", "Tiger", "Alligator"];
}
