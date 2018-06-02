import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  arrWords = [
    { id: 1, en: 'Hello', vn: 'Xin Chao', got: true},
    { id: 1, en: 'Yes', vn: 'Vang', got: false},
    { id: 1, en: 'No', vn: 'Ko', got: false},
    { id: 1, en: 'Tree', vn: 'Cay', got: true},
  ];

  constructor() { }

  ngOnInit() {
  }

}
