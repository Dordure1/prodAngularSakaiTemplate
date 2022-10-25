import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/demo/api/customer';
import { eventTab } from '../../shared/class/event';
import { userEvent } from '../../shared/class/eventUser';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-alleventsc',
  templateUrl: './alleventsc.component.html'
})
export class AlleventscComponent implements OnInit {

  userEventTable : userEvent [] = []
  checkEventReg: number [] = [] 
  check : boolean = false


  display : boolean = false

  eventToShow : eventTab [] = []
  allEventWithId :
    {id:number, name : string , description : string , address : string, date : Date , city : string} [] = []

  eventList: eventTab [] = [];




  constructor( 
    private eventServe : EventService,
    private router : Router, 
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAllEvent()
    this.checkUserEvent()
    
    
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

 async  checkEvent(eventId:number){
    // this.router.navigate([this.router.url,"event",eventId])
    // this.display = true
    await this.eventServe.getAllEvent().then((allEvents)=>{
      allEvents.forEach((element:any)=>{
        element.forEach((res:any)=>{
          if(res.id === eventId)
            {
              this.allEventWithId.push({id :res.id, name : res.eventName, description :  res.description, address : res.address, date : res.date, city : res.city})
              console.log(this.allEventWithId);  
            }
        }
        )       

      })
    })
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



}

