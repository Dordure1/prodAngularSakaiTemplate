import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  userName :string = ""
  password :string = ""
  constructor(public layoutService : LayoutService) { }

  ngOnInit(): void {
  }

  logIn(){
    console.log(this.userName +" " + this.password)
  }
}
