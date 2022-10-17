import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-youarec',
  templateUrl: './youarec.component.html'
})
export class YouarecComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  loginCoop(){
    this.router.navigate(['./auth/login'])
  }
  loginUser(){
    this.router.navigate(['./auth/login'])
  }

  registerUser(){
    this.router.navigate(['./auth/register'])
  }
  registerCoop(){
    this.router.navigate(['./auth/register'])
  }

}
