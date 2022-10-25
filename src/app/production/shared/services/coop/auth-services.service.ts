import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import {BehaviorSubject, filter, map, Observable} from 'rxjs'
import { HomecComponent } from 'src/app/production/home/homec/homec.component';
import { newCoop } from '../../class/newCoop';
import { user } from '../../class/users';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {
  
  private url : string = "http://localhost:3000/"
  private user! : Observable<user[]>
  isConnect:boolean = false
  idConnected! : string 
  $isConnect: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.verifyLogged())
  $connectedCoopId : BehaviorSubject<string|null> = new BehaviorSubject<string|null>(this.checkId())


  /// registration 
  userName : string = ""
  password : string = ""
  organisationName : string =""
  city : string =""
  address:string =""
  addressNumber : number = 0

  constructor(private client :HttpClient) { }

  checkId(){
    if(localStorage.getItem("coopIdConnected") != null)
      return localStorage.getItem("CoopIdConnected")
    else 
      return null
  }
  
  verifyLogged(){
    let tmp = localStorage.getItem("isConnect")
    if (tmp=="true")
    {
      this.isConnect=true
      return this.isConnect
    }
    else {
      this.isConnect = false
      return false
    }
  }

  checklogin(userName : string, password : string): Observable<user[]>{
    return this.client.get<user[]>(this.url + "coop")
    .pipe(
      map(user=> user.filter(user =>user.userName === userName && user.password == password))) 
  }

  login(userName: string, password:string, idUser :number){ 
    this.isConnect = true
    localStorage.setItem("isConnect","true")
    localStorage.setItem("CoopIdConnected", `${idUser}`)
    this.emit_isConnect()
  }

  logOut(){
    this.isConnect = false
    localStorage.clear()
    this.emit_isConnect()
  }

  emit_isConnect(){
    this.$isConnect.next(this.isConnect)
    this.$connectedCoopId.next(this.idConnected)
  }

  registerInDB(userName:string, password:string , organisationName: string, city : string, address: string, addressNumber:number){
    let tmpUser :newCoop = {userName, password, organisationName,city,address,addressNumber}
    this.client.post<newCoop>(this.url + "coop", tmpUser).subscribe()

  }
}
