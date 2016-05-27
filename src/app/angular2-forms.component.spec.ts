import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2FormsAppComponent } from '../app/angular2-forms.component';

beforeEachProviders(() => [Angular2FormsAppComponent]);

describe('App: Angular2Forms', () => {
  it('should create the app',
      inject([Angular2FormsAppComponent], (app: Angular2FormsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-forms works!\'',
      inject([Angular2FormsAppComponent], (app: Angular2FormsAppComponent) => {
    expect(app.title).toEqual('angular2-forms works!');
  }));
});
