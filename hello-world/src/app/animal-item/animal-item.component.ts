import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.component.css']
})
export class AnimalItemComponent implements OnInit {
	@Input() animal: string;

  constructor() { }

  ngOnInit() {
  }

}
