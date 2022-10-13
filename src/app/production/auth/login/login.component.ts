import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthServicesService } from 'src/app/production/shared/services/auth-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  userName :string = ""
  password :string = ""
  constructor(public layoutService : LayoutService,
              private authServe:AuthServicesService){ }

  ngOnInit(): void {
  }

  checkUser(){
    this.authServe.checklogin(this.userName,this.password).subscribe((user:any)=>{
      if(user.length>=1){
        this.logIn()
      }
      else{
        return console.log("error")
      }
    }  
    )
  }
  
  logIn(){
    this.authServe.login(this.userName, this.password)
  }
}
