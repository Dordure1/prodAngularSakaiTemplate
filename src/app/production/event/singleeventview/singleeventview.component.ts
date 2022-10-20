import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-singleeventview',
  templateUrl: './singleeventview.component.html'
})
export class SingleeventviewComponent implements OnInit {
  display :boolean = true


  // name:string =""
  // description : string = ""
  // address : string = ""
  // date : string = ""
  // city : string = ""
  @Input() id !: number 
  @Input () name:string =""
  @Input () description : string = ""
  @Input () address : string = ""
  @Input () date : string = ""
  @Input () city : string = ""

  constructor(
    private eventServe : EventService, 
    private activatedRoute : ActivatedRoute, 
    private router : Router
    ) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params : any)=>{
    //       this.displayEvent(params.eventId)
    // }) 

    // console.log(name);
    
  }

  // displayEvent(eventId:number){
  //   this.eventServe.displayEvent(eventId).subscribe((event:any)=>{
  //     this.name = event.eventName
  //     this.description = event.description
  //     this.address = event.address
  //     this.date = event.date
  //     this.city = event.city

  //   }
  //   )

  // }

  registerToEvent(idEvent : any){
    let idUser = localStorage.getItem("idUserConnected")
    this.eventServe.registerToEvent(idUser, idEvent)
    window.location.reload()
  }

}
