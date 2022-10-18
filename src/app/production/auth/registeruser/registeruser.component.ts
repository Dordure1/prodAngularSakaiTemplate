import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { generateMyFormUser } from 'src/app/production/shared/formsValidator/registrationUser/registeruser.form';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html'
})
export class RegisteruserComponent implements OnInit {

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
    private client : HttpClient
    ) { }

  ngOnInit(): void {
  }

  sendForm(){

  }

}
