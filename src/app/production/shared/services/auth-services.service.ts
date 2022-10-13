import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {
isConnect:boolean = false
$isConnect: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.verifyLogged())
  
constructor() { }

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

  login(){
    this.isConnect = true
    localStorage.setItem("isConnect","true")
    this.emit_isConnect()
  }

  emit_isConnect(){
    this.$isConnect.next(this.isConnect)
  }
}
