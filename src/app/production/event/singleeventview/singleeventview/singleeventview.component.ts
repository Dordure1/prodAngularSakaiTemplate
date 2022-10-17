import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../shared/event.service';

@Component({
  selector: 'app-singleeventview',
  templateUrl: './singleeventview.component.html'
})
export class SingleeventviewComponent implements OnInit {

  name:string =""
  description : string = ""
  address : string = ""
  date : string = ""
  city : string = ""

  constructor(
    private eventServe : EventService, 
    private activatedRoute : ActivatedRoute, 
    private router : Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params : any)=>{
          this.displayEvent(params.eventId)
    }) 
  }

  displayEvent(eventId:number){
    this.eventServe.displayEvent(eventId).subscribe((event:any)=>{
      this.name = event.eventName
      this.description = event.description
      this.address = event.address
      this.date = event.date
      this.city = event.city

    }
    )

  }

  registerToEvent(){
  }
}
