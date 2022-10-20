import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filterEventStoreDefs } from '@fullcalendar/angular';
import { stringify } from 'querystring';
import { map, Observable,filter, pipe } from 'rxjs';
import { eventTab } from '../../shared/class/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  url: string = "http://localhost:3000/"
  coopEvent : any [] = []
  organizationName : string=""
  eventName :string = ""
  email : string = ""
  city : string = ""
  address : string = ""
  addressNumber:number =0
  maxPers:number = 0
  date : string = ""
  description : string =""


  urlEvent : string = "http://localhost:3001/"
  constructor(
    private client : HttpClient
  ) { }


  async getAllEvent(){
    return this.client.get(this.urlEvent + "event")
  }

  createEvent(organizationName:string,eventName:string,email:string,city:string,address:string,addressNumber:number,maxPers:number, date:string, description:string){
    let tmpEvent : eventTab = {organizationName:organizationName,eventName:eventName, email:email,city:city,address:address, addressNumber:addressNumber, maxParticipants:maxPers, date:date,description:description}
    this.client.post<eventTab>(this.urlEvent + "event",tmpEvent).subscribe()
  }

  displayEvent(eventId : number):Observable<any>{
    return this.client.get<any>(this.urlEvent + "event/" + eventId )
  }

  async checkEventByCoopId(){
    let tmpId = localStorage.getItem("CoopIdConnected")
    if(tmpId !=null)
      return localStorage.getItem("CoopIdConnected")
    else
      return ""
  }

  async getCoopName(id:any){
    return this.client.get(this.url + "coop/" + id)
  }
  
  getEventByCoop(name : string){
    return this.client.get<eventTab[]>(this.urlEvent + "event").pipe(
      map(event => event.filter(event => event.organizationName == name))
    )
    
  }

  modifyEvent(eventModif : any [], id : number){
    return this.client.patch(this.urlEvent + "event/" +id, {"description" : eventModif[0], "city" : eventModif[1], "date" : eventModif[2]})
  }
}
