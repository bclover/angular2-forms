import { Component } from '@angular/core';
import { HeroFormComponent } from './hero-form/hero-form.component';

@Component({
  directives: [HeroFormComponent],
  moduleId: module.id,
  selector: 'angular2-forms-app',
  templateUrl: 'angular2-forms.component.html',
  styleUrls: ['angular2-forms.component.css']
})
export class Angular2FormsAppComponent {
}
