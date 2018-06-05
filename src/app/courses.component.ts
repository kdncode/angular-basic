import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <h1>Hello World + {{ getName() }}</h1>
    <ul *ngFor='let course of courses'>
      <li>{{ course }}</li>
    </ul>`
})

export class CoursesComponent {

  name = 'Jizzz Jack';
  age = 1;
  courses;

  constructor(coursesService: CoursesService) {
    this.courses = coursesService.getCourses();
  }

  getName() {
    return this.name;
  }
}
