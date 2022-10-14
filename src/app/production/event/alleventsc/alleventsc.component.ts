import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/demo/api/customer';
import { eventTab } from '../../shared/class/event';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-alleventsc',
  templateUrl: './alleventsc.component.html'
})
export class AlleventscComponent implements OnInit {
  test: {name :string } [] = [
    {
      name : "ee"
    },
    {
      name : "coucou"
    }

  ]
  customers1: Customer[] = [];
  eventList: eventTab [] = [];
  constructor( 
    private eventServe : EventService
  ) { }

  ngOnInit(): void {
    this.getAllEvent()
  }


  clear(table:any) {
    table.clear();
}

  async getAllEvent(){
    await this.eventServe.getAllEvent().then((allEvents)=>{      
      allEvents.forEach((element:any)=>{
          element.forEach((res : eventTab)=>{
            this.eventList.push(res)
          })
      })      
    }
    
    )
  }


  checkEvent(){

  }
}
