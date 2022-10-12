import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
password:string=""
  constructor(public layoutService : LayoutService) { }

  ngOnInit(): void {
  }

}
