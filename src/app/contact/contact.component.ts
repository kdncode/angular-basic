import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  contacts = [
    { id: 1, name: 'Zich', phone: '111'},
    { id: 2, name: 'Zac', phone: '222'},
    { id: 3, name: 'Zoo', phone: '333'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
