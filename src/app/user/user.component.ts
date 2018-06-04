import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  address: Address;
  hobbies: string[];

  constructor() {

   }

  ngOnInit() {
    this.name = 'Jazz';
    this.age = 22;
    this.address = {
      street: '1st street',
      city: 'Los Angeles'
    }
    this.hobbies = ['Play pingpong', 'Go fishing', 'Play Baseball']
  }

  onClick() {
    this.name = 'Hello World'
    this.hobbies.unshift('new new ')

  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby)
    return false;
  }

  deleteHobby(hobby) {
    for( let i = 0; i < this.hobbies.length; i++ ) {
      if (this.hobbies[i] === hobby) {
        this.hobbies.splice(i, 1)
      }
    }
  }
}

interface Address {
  street: string,
  city: string
};
