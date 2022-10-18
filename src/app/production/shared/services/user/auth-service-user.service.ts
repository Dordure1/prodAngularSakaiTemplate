import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { user } from '../../class/users';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceUserService {

  private url : string = "http://localhost:3002/"

  isConnectUser:boolean = false
  $isConnectUser: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.verifyLogged())

  constructor(private client : HttpClient) { }

  verifyLogged(){
    let tmp = localStorage.getItem("isConnectUser")
    if (tmp=="true")
    {
      this.isConnectUser=true
      return this.isConnectUser
    }
    else {
      return false
    }
  }

  
  checklogin(userName : string, password : string): Observable<user[]>{
    return this.client.get<user[]>(this.url + "user")
    .pipe(
      map(user=> user.filter(user =>user.userName === userName && user.password == password))) 
  }

  login(userName: string, password:string){ 
    this.isConnectUser = true
    localStorage.setItem("isConnectUser","true")
    this.emit_isConnect()
  }

  logOut(){
    this.isConnectUser = false
    localStorage.clear()
    this.emit_isConnect()
  }

  emit_isConnect(){
    this.$isConnectUser.next(this.isConnectUser)
  }
}
