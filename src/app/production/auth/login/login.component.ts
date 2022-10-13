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

  logIn(){
    this.authServe.login()
  }
}
