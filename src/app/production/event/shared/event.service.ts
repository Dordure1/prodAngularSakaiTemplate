import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filterEventStoreDefs } from '@fullcalendar/angular';
import { stringify } from 'querystring';
import { map, Observable,filter, pipe } from 'rxjs';
import { eventTab } from '../../shared/class/event';
import { userEvent } from '../../shared/class/eventUser';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  url: string = "http://localhost:3000/"
  urlUserEvent: string = "http://localhost:3003/"
  coopEvent : any [] = []
  organizationName : string=""
  eventName :string = ""
  email : string = ""
  city : string = ""
  address : string = ""
  addressNumber:number =0
  maxPers:number = 0
  date! : Date 
  description : string =""


  urlEvent : string = "http://localhost:3001/"
  constructor(
    private client : HttpClient
  ) { }


  async getAllEvent(){
    return this.client.get(this.urlEvent + "event")
  }

  createEvent(organizationName:string,eventName:string,email:string,city:string,address:string,addressNumber:number,maxPers:number, date:Date, description:string){
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

  registerToEvent(idUser :any, idEvent:any){
    let tmp : userEvent = {idUser : parseInt(idUser) , idEvent : idEvent}
    this.client.post<userEvent>(this.urlUserEvent + "userEvent" , tmp).subscribe()
  }


  checkUserEvent(){
    return this.client.get(this.urlUserEvent + "userEvent")
  }

  cancelRegistration(idEvent:number){
    return this.client.get(this.urlUserEvent + "userEvent")
    }

    cancelEventUser(eventUserId : any){
     return this.client.delete(this.urlUserEvent + 'userEvent/' + eventUserId ).subscribe()
    }


    checkEventUser(idUser : number){
      return this.client.get(this.urlUserEvent + "userEvent")  
    }


    getEventByUserId(){
      return this.client.get(this.urlEvent + "event")
    }

    getOrganizationName(){
      let id = localStorage.getItem("CoopIdConnected")
      return this.client.get<any[]>(this.url +"coop").pipe(
        map(res => res.filter(event => event.id == id)
        )
      )
    }
}
