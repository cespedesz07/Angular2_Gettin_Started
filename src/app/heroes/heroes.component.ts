import { Component, OnInit } from '@angular/core';

// Decorator Function that specifies the METADATA for the 'Heroes Component'
// The Metadata is being sent through a JSON Object
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
