import { Component, OnInit } from '@angular/core';
import { NgForm }    from '@angular/common';

import { Hero } from '../hero';

@Component({
  moduleId: module.id,
  selector: 'hero-form',
  templateUrl: 'hero-form.component.html',
  styleUrls: ['hero-form.component.css']
})

export class HeroFormComponent implements OnInit {

  active = true;

  powers = ['Air Manipulation', 'Animal Control', 'Animal Powers', 'Atomic Manipulation',
    'Bone Claws', 'Channel The Devil', 'Radiation', 'Telepathy', 'Teleportation', 'Time Travel'];

  model = new Hero(18, 'Dr IQ', this.powers[7], 'Chuck Overstreet');
  submitted = false;

  newHero() {
    this.model = new Hero(42, '', '', '');
    this.active = false;
    setTimeout(()=> this.active=true, 0);
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    console.log('onSubmit() was triggered!');
  }

}
