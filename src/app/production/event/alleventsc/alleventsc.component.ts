import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private eventServe : EventService,
    private router : Router, 
    private activatedRoute : ActivatedRoute
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

  checkEvent(eventId:number){
    this.router.navigate([this.router.url,"event",eventId])
  }
}
