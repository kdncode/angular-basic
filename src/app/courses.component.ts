import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <h1>Hello World + {{ getName() }}</h1>
    <button class="btn btn-primary" [class.active]="isActive">Save</button>
    <button [style.backgroundColor]="isActive ? 'green' : 'blue' ">Save</button>
    <button (click)="onClick()">Click Me </button><br/>

    <input (keyUp.enter)="onKeyUp($event)" > <br/><br/>
    <!-- Template variable -->
    <input #email (keyup.enter)="onKeyUp1(email.value)" ><br/><br/>
    <ul *ngFor='let course of courses'>
      <li>{{ course }}</li>
    </ul>
    <img [src]="github"/>`
})

export class CoursesComponent {

  name = 'Jizzz Jack';
  age = 1;
  courses;
  github= "https://octodex.github.com/images/okal-eltocat.jpg"
  isActive = true;
  constructor(coursesService: CoursesService) {
    this.courses = coursesService.getCourses();
  }

  getName() {
    return this.name;
  }

  onClick() {
    console.log('hello world')
  }

  onKeyUp($event) {
    console.log($event.target.value)
  }

  onKeyUp1(email) {
    console.log(email);

  }
}
