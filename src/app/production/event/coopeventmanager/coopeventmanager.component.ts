import { Component, OnInit } from '@angular/core';
import { elementClosest } from '@fullcalendar/angular';
import { eventTab } from '../../shared/class/event';
import { newCoop } from '../../shared/class/newCoop';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-coopeventmanager',
  templateUrl: './coopeventmanager.component.html'
})
export class CoopeventmanagerComponent implements OnInit {

  eventList: eventTab [] = [];

  allEventWithId :
  {id:number, name : string , description : string , address : string, date : Date , city : string} [] = []
  constructor(private eventServe : EventService) { }

  ngOnInit(): void {
    this.displayEvent()
  }

  clear(table:any) {
    table.clear();
}


async displayEvent() {
  await this.eventServe.checkEventByCoopId()
  .then(async (res : any)=>{
     await this.eventServe.getCoopName(res)

     .then(async (coop)=>{
         coop.forEach( (item:any)=>{          
             this.eventServe.getEventByCoop(item.organisationName).subscribe((elem:eventTab[])=>{
                if(elem.length>=1){
                    elem.forEach(element => {
                      this.eventList.push(element)                      
                    });   
                }
             })
        }
        ); 
     }
     )  
    })
}
async manageEvent(eventId:number){
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
