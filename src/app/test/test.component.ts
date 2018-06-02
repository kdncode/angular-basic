import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {
  title = 'Hello world';
  myPara = 'This is a paragraph';
  myNum = 4444;
  forgot = true;
  imageUrl = 'http://jobs.pwc.com/Views/Client/e536ed96-5eee-49c9-b71b-fb68099f63bb/images/mag-glass.png'

  toggleForgot() {
    this.forgot = !this.forgot;
  }
}
