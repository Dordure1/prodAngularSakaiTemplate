import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { userEvent } from '../../shared/class/eventUser';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-singleeventview',
  templateUrl: './singleeventview.component.html'
})
export class SingleeventviewComponent implements OnInit {
  display :boolean = true

  userEventTable : userEvent [] = []
  checkEventReg: number [] = [] 

  eventUserId! : any 

  // name:string =""
  // description : string = ""
  // address : string = ""
  // date : string = ""
  // city : string = ""
  @Input() id !: number 
  @Input () name:string =""
  @Input () description : string = ""
  @Input () address : string = ""
  @Input () date! : Date
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
    this.checkUserEvent()
    
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

  checkUserEvent(){
    let idUser : any =  localStorage.getItem("idUserConnected")
    let tmp: Observable<any> = this.eventServe.checkUserEvent()
    tmp.forEach(res => {
      
      res.forEach((event : any)=>{
        if(event.idUser == idUser)
        {
         
          let eventId: any = event.idEvent
          this.checkEventReg.push(eventId);
          this.userEventTable.push({idUser : idUser,idEvent : eventId })          
        }  
      });
      console.log(this.checkEventReg);  
    })
  }

  cancelRegistration(idEvent:number){
    let idUser : any =  localStorage.getItem("idUserConnected")
    let tmp : Observable <any> = this.eventServe.cancelRegistration(idEvent)
    tmp.forEach(res=>{
        res.forEach((event : any)=>{
          if(event.idEvent == idEvent && event.idUser == idUser){
            console.log(event.id , "event id ");
            
            this.eventUserId = event.id
            this.cancelEventUser(this.eventUserId)
            window.location.reload()
          }
        })
      })
  }

  cancelEventUser(eventUserId: any){
    console.log(eventUserId , "usereventid");
    
    this.eventServe.cancelEventUser(eventUserId)
  }

}
