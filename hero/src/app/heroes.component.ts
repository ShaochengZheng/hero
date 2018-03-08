import { Component ,OnInit} from '@angular/core';
import {Hero} from './Hero';
import { HeroService } from './hero.service';
import {Router} from '@angular/router';
 
@Component({
  selector: 'my-heroes',
  templateUrl: `./heros.component.html`,
  styleUrls: [ `./heroes.component.css` ]
})
export class HeroesComponent implements OnInit{
  title = 'Tour of Heroes';
  heroes : Hero[];
  selectedHero: Hero;

  constructor(
    private router:Router,
    private HeroService: HeroService) {} 

  getHeroes():void{
    this.HeroService.getHeroes().then(heroes=> this.heroes=heroes);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  ngOnInit(): void{
    this.getHeroes();
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}