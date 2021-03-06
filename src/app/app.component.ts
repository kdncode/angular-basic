import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  post = {
    title: 'New Angular now',
    isLock: true
  }

  tweet = {
    body: '...',
    likesCount: 5,
    isLiked: true

  }

  onLockChange() {
    console.log('locked changes')
  }
}
