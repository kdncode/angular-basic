import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h1>{{ value }}</h1>
    <app-child (myClick)="value = value + 1"></app-child>`
})

export class ParentComponent {
  value = 0;
}
