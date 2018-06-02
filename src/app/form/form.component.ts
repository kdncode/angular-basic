import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  name = '';
  age = '';
  level = '';
  evenStyle = {color: 'red', fontSize: '50px'};
  oddStyle = {color: 'green', fontSize: '20px'};
  isHighlight = false;
  currentClass = { circle: !this.isHighlight, square: this.isHighlight }

  constructor() { }

  ngOnInit() {
  }

  showName(event) {
	  this.name = event.target.value
  }
}
