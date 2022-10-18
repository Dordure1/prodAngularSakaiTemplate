import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { generateMyForm } from '../../shared/formsValidator/registration/register.form';
import { AuthServicesService } from '../../shared/services/coop/auth-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  userName:string =""
  password : string = ""
  organisationName : string =""
  city : string =""
  address:string =""
  addressNumber : number = 0


  registerForm! : {
    email : string,
    coopName: string, 
    password : string, 
    Vpassword: string, 
    city : string, 
    address : string, 
    number : number
  }

  myForm : FormGroup = generateMyForm(this.fb , this.client)

  constructor(
    private fb : FormBuilder,
    private client : HttpClient,
    private authCoopServe : AuthServicesService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  sendForm()
  {
    if(this.myForm.status =="VALID")
    {
      console.log("it's ok")
      console.log(this.myForm.status)
      this.registerInDB()

    }
    else{
      console.log("notOk");
      console.log(this.myForm)
    }
  }

  registerInDB(){
    this.authCoopServe.registerInDB(this.userName, this.password, this.organisationName, this.city, this.address, this.addressNumber)
    this.router.navigate([''])
  }


}
