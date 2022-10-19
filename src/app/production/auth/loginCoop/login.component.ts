import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthServicesService } from 'src/app/production/shared/services/coop/auth-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  userName :string = ""
  password :string = ""
  constructor(public layoutService : LayoutService,
              private authServe:AuthServicesService,
              private router : Router){ }
              

  ngOnInit(): void {
  }

  checkUser(){
    this.authServe.checklogin(this.userName,this.password).subscribe((user:any)=>{
      if(user.length>=1){
        let idUser = user[0].id
        
        this.logIn(idUser)
      }
      else{
        return console.log("error")
      }
    }  
    )
  }

  logIn(idUser:number){
    this.router.navigate([''])
    this.authServe.login(this.userName, this.password, idUser)
  }
}
