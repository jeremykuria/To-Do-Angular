import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  //@Input is a settable property annotated with an @Input decorator. 
  //Values flow into the property when it is data bound with a property binding 
  @Input() hero: Hero;


  constructor() { }
  
  ngOnInit() {
  }

}
