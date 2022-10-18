import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { add } from 'date-fns';
import { generateMyFormUser } from 'src/app/production/shared/formsValidator/registrationUser/registeruser.form';
import { AuthServiceUserService } from '../../shared/services/user/auth-service-user.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html'
})
export class RegisteruserComponent implements OnInit {

  userName:string =""
  password : string = ""
  city : string =""
  address:string =""
  addressNumber : number = 0


  registerForm! : {
    email : string,
    password : string, 
    Vpassword: string, 
    city : string, 
    address : string, 
    number : number
  }

  myForm : FormGroup = generateMyFormUser(this.fb , this.client)


  constructor(
    private fb : FormBuilder,
    private client : HttpClient,
    private router: Router,
    private authUserServe : AuthServiceUserService
    ) { }

  ngOnInit(): void {
  }

  sendForm(){
    if(this.myForm.status =="VALID")
    {
      console.log("it's ok")
      console.log(this.myForm.status)
      this.registrationInDB()
    }
    else{
      console.log("notOk");
      console.log(this.myForm)
    }
  }

  registrationInDB(){
    this.authUserServe.registrationInDB(this.userName, this.password, this.city, this.address, this.addressNumber)
    this.router.navigate([''])
    
  }

}
