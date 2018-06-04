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
    { name: "Suzuki Viava", age: "20"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
