import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  isLock: boolean;
  title: string;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isLock = ! this.isLock;
  }
}
