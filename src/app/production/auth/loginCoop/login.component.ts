import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Toast, ToastItem } from 'primeng/toast';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthServicesService } from 'src/app/production/shared/services/coop/auth-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers : [MessageService]
})
export class LoginComponent implements OnInit {
  userName :string = ""
  password :string = ""
  constructor(public layoutService : LayoutService,
              private authServe:AuthServicesService,
              private router : Router,
              private messageService : MessageService
              ){ }
              
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
    this.authServe.login(this.userName, this.password, idUser)   
    console.log('test');
    // this.messageService.add({key:"myKey1",severity:'success', summary: 'Success', detail: 'Message Content'})
    this.router.navigate([''])
  }
}
