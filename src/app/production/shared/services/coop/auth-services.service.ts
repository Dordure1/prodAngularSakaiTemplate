import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import {BehaviorSubject, filter, map, Observable} from 'rxjs'
import { user } from '../../class/users';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {
  
  private url : string = "http://localhost:3000/"
  private user! : Observable<user[]>
  isConnect:boolean = false
  $isConnect: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.verifyLogged())
  
  constructor(private client :HttpClient) { }

  
  verifyLogged(){
    let tmp = localStorage.getItem("isConnect")
    if (tmp=="true")
    {
      this.isConnect=true
      return this.isConnect
    }
    else {
      return false
    }
  }

  checklogin(userName : string, password : string): Observable<user[]>{
    return this.client.get<user[]>(this.url + "coop")
    .pipe(
      map(user=> user.filter(user =>user.userName === userName && user.password == password))) 
  }

  login(userName: string, password:string){ 
    this.isConnect = true
    localStorage.setItem("isConnect","true")
    this.emit_isConnect()
  }

  logOut(){
    this.isConnect = false
    localStorage.clear()
    this.emit_isConnect()
  }

  emit_isConnect(){
    this.$isConnect.next(this.isConnect)
  }
}
