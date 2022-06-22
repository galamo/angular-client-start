import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // <app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public header: string
  public text: string
  constructor() {
    this.header = "Shopping App"
    this.text = "contact info: aviv@gmail.com"
  }

  getHeader() {
    return this.header;
  }
}
