import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input() isLock: boolean;
  @Output() change = new EventEmitter();

  title: string;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isLock = ! this.isLock;
    this.change.emit(); // Notify that something is happening
  }

}
