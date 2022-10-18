import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthServiceUserService } from 'src/app/production/shared/services/user/auth-service-user.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html'
})
export class LoginuserComponent implements OnInit {
userName : string =""
password : string = ""
  authServe: any;
  constructor(
    private loginUserServe : AuthServiceUserService,
    public layoutService : LayoutService,
    private router : Router
    ) { }

  ngOnInit(): void {
  }

    checkUser(){
      this.loginUserServe.checklogin(this.userName,this.password).subscribe((user:any)=>{
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
        this.router.navigate([''])
        this.loginUserServe.login(this.userName, this.password)
      }
    
}

