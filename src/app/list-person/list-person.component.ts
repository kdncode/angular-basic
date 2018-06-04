import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  arrPeople = [
    { name: "John Wick", age: "2"},
    { name: "Ann Bella", age: "5"},
    { name: "Jay Zheng", age: "22"},
    { name: "Suzuki Viava", age: "20"},
    { name: "Teo Nguyen", age: "11"}
  ]

  constructor() { }

  ngOnInit() {
  }

  removePersonByName(name: string) {
    const index = this.arrPeople.findIndex( e => e.name === name);
    this.arrPeople.splice(index, 1);
  }
}
