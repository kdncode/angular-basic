import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  newEng = '';
  newVn = '';

  arrWords = [
    { id: 1, en: 'Hello', vn: 'Xin Chao', got: true},
    { id: 1, en: 'Yes', vn: 'Vang', got: false},
    { id: 1, en: 'No', vn: 'Ko', got: false},
    { id: 1, en: 'Tree', vn: 'Cay', got: true},
  ];

  constructor() { }

  ngOnInit() {
  }

  addWord() {
    this.arrWords.unshift({
      id : this.arrWords.length + 1,
      en : this.newEng,
      vn : this.newVn,
      got : false
    });

  this.newEng = '';
  this.newVn = '';
  }
}
