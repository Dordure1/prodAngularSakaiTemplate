import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html'
})
export class LoginuserComponent implements OnInit {
userName : string =""
password : string = ""
  constructor() { }

  ngOnInit(): void {
  }

  checkUser(){
    
  }
}
