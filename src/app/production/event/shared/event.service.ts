import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { eventTab } from '../../shared/class/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  url: string = "http://localhost:3001/"

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
    this.client.post<eventTab>(this.url + "event",tmpEvent).subscribe()
  }
}
