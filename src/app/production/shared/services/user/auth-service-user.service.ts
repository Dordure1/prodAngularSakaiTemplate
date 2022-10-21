import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { newUser } from '../../class/newUser';
import { user } from '../../class/users';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceUserService {

  /// for registration
  userName:string =""
  password : string = ""
  city : string =""
  address:string =""
  addressNumber! : number 
  ////


  private url : string = "http://localhost:3002/"

  isConnectUser:boolean = false
  $isConnectUser: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.verifyLogged())
  $connectedUserId : BehaviorSubject<string|null> = new BehaviorSubject<string|null>(this.checkId())


  constructor(private client : HttpClient) { }

  
  checkId(){
    if(localStorage.getItem("userIdConnected") != null)
      return localStorage.getItem("userIdConnected")
    else 
      return null
  }



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
    return this.client.get<user[]>(this.url + "user/")
    .pipe(
      map(user=> user.filter(user =>user.userName === userName && user.password == password))) 
  }

  login(userName: string, password:string, idUser : number){ 
    this.isConnectUser = true
    localStorage.setItem("isConnectUser","true")
    localStorage.setItem("idUserConnected",`${idUser}`)

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


  registrationInDB(userName : string, password: string, city : string, address : string , addressNumber:number){
    let tmpRegistration :newUser = { userName : userName, password :  password, city : city, address: address, addressNumber : addressNumber}
    this.client.post<newUser>(this.url + "user", tmpRegistration).subscribe()
  }
}
