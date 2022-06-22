import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {
  public currentDate: string;
  constructor() {
    this.currentDate = new Date().toISOString()
  }

}
