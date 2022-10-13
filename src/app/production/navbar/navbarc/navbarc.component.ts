import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbarc',
  templateUrl: './navbarc.component.html'
})
export class NavbarcComponent implements OnInit {
  items: MenuItem[] = [];
  constructor(private router : Router) {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', command:() => this.navToHome()},
      {label: 'check Calendar', icon: 'pi pi-fw pi-calendar', command:() => this.navToCalendar()},
      {label: 'Check Events', icon: 'pi pi-fw pi-pencil', command:()=>this.navToEvents()},
      {label: 'Create an event', icon: 'pi pi-fw pi-pencil', command:()=>this.navToEventsCreation()},
    ];
   }
  ngOnInit(): void {
  }

  navToHome(){
    this.router.navigate([''])
  }

  navToCalendar(){
    this.router.navigate(['/calendar'])
  }

  navToLogin(){
    this.router.navigate(['./auth/login'])
  }
  
  navToRegister(){
    this.router.navigate(['./auth/register'])
  }
  navToEvents(){
    this.router.navigate(['./event'])
  }
  navToEventsCreation(){
    this.router.navigate(['./event/create'])

  }

}
