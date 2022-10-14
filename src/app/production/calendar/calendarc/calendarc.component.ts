import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calendarc',
  templateUrl: './calendarc.component.html'
})
export class CalendarcComponent implements OnInit {

  date : Date = new Date()
  constructor() { }

  ngOnInit(): void {
    console.log("hello")
  }

}
