import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userregistredevent',
  templateUrl: './userregistredevent.component.html'
})
export class UserregistredeventComponent implements OnInit {

  eventList : any[] = []
  constructor() { }

  ngOnInit(): void {
  }



  clear(table:any) {
    table.clear();
}


}
