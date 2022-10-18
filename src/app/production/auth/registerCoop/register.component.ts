import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { generateMyForm } from '../../shared/formsValidator/registration/register.form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

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
    private client : HttpClient
  ) { }

  ngOnInit(): void {
  }

  sendForm()
  {
    if(this.myForm.status =="VALID")
    {
      console.log("it's ok")
      console.log(this.myForm.status)
    }
    else{
      console.log("notOk");
      console.log(this.myForm)
    }
  }


}
