import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  powers = ['Really Smart', 'SuperFlexible','Super hot','teleptic'];

  model = new Hero(18, 'Mr.fantastic',this.powers[0],'Reed Richards' );
  
  submitted = false;
  onSubmit(){this.submitted = true;}
  
  newHero(){
    this.model = new Hero(42,'', '');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
