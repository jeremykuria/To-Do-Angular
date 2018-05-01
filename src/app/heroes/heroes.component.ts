import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';
  
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }
  hero: Hero[];
  heroes = HEROES;
  selectedHero: Hero
  
  ngOnInit() {
  }
  onSelect(hero: Hero): void{
    console.log('clicked' +hero);
    this.selectedHero=hero;
  }
}
