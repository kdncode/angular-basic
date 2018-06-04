import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h1>{{ value }}</h1>
    <app-child (myClick)="changeValue($event);"></app-child>`
})

export class ParentComponent {
  value = 0;

  changeValue(isAdd: boolean) {
    isAdd ? this.value = this.value + 1 : this.value = this.value - 1;
  }

}
