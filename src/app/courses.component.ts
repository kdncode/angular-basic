import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <h1>Hello World + {{ getName() }}</h1>
    <button class="btn btn-primary" [class.active]="isActive">Save</button>
    <button [style.backgroundColor]="isActive ? 'green' : 'blue' ">Save</button>
    <button (click)="onClick()">Click Me </button><br/>

    <!-- Event binding -->
    <input (keyUp.enter)="onKeyUp($event)" > <br/><br/>

    <!-- Template variable
    <input #email (keyup.enter)="onKeyUp1(email.value)" ><br/><br/>
    -->

    <!-- 2 ways binding -->
    <input [(ngModel)]="email" (keyUp.enter)="onKeyUp2()" > <br/><br/>

    <!-- Pipe -->
    {{ sport.name | uppercase | lowercase }} <br />
    {{ sport.rating | number:'1.1-2' }}<br />
    {{ sport.player | number }}<br />
    {{ sport.price | currency: 'USD' }}<br />
    {{ sport.releaseDate | date:'longDate' }}<br />

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
  email = 'hi@hi.com';

  sport = {
    name: 'Football',
    rating: 4.922,
    player: 2221123,
    price: 320.12,
    releaseDate: new Date(1942, 3, 1)
  }

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

  onKeyUp2() {
    console.log(this.email);
  }

}
