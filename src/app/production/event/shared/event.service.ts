import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  url : string = "http://localhost:3001/"
  constructor(
    private client : HttpClient
  ) { }


  async getAllEvent(){
    return this.client.get(this.url + "event")
  }
}
