import { Component, OnInit } from '@angular/core';
import { eventTupleToStore } from '@fullcalendar/angular';
import { Observable } from 'rxjs';
import { checkServerIdentity } from 'tls';
import { userEvent } from '../../shared/class/eventUser';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-userregistredevent',
  templateUrl: './userregistredevent.component.html'
})
export class UserregistredeventComponent implements OnInit {
  userEventTable : userEvent [] = []

  checkEventReg: number [] = [] 
  eventIdList : any[] = []
  userId!  : any 
  eventList : any[] = []
  allEventWithId :
  {id:number, name : string , description : string , address : string, date : Date , city : string} [] = []

  constructor(private eventServe : EventService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem("idUserConnected")
    this.checkEventUser(this.userId)
    this.checkUserEvent()
  }


  clear(table:any) {
    table.clear();
  }

  checkEventUser(userId :any){
    let tmp : Observable <any> = this.eventServe.checkEventUser(userId)
    tmp.forEach(res=>{
      console.log(res);
      
      res.forEach((event:any) => {    
        
        let tmpId = event.idEvent
        this.eventIdList.push(tmpId)
      });
      
      this.getEventByUserId()
    })
    
  }

  getEventByUserId(){
    let tmp : Observable <any> = this.eventServe.getEventByUserId()
    tmp.forEach(res=>{

      res.forEach((event:any) => {
       
        let eventId = event.id
        
          if(this.eventIdList.find(event => event== eventId)){
            this.eventList.push(event)   
          }
          
      });
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


  
}
