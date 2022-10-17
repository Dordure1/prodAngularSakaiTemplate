import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthServicesService } from '../../shared/services/auth-services.service';

@Component({
  selector: 'app-navbarc',
  templateUrl: './navbarc.component.html'
})
export class NavbarcComponent implements OnInit {
  isConnect : boolean = false
  items: MenuItem[] = [];
  constructor(private router : Router, private authServe : AuthServicesService) {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', command:() => this.navToHome()},
      {label: 'check Calendar', icon: 'pi pi-fw pi-calendar', command:() => this.navToCalendar()},
      {label: 'Check Events', icon: 'pi pi-fw pi-pencil', command:()=>this.navToEvents()},
      {label: 'Create an event', icon: 'pi pi-fw pi-pencil', command:()=>this.navToEventsCreation()},
    ];
   }
  ngOnInit(): void {
    this.authServe.$isConnect.subscribe((isConnect:boolean)=>{
      this.isConnect = isConnect
    })

  }

  navToHome(){
    this.router.navigate([''])
  }

  navToCalendar(){
    this.router.navigate(['/calendar'])
  }

  navToLogin(){
    this.router.navigate(['./auth'])
  }
  
  navToEvents(){
    this.router.navigate(['./event'])
  }
  navToEventsCreation(){
    this.router.navigate(['./event/create'])
  }
  logOut(){
    this.authServe.logOut()
  }
}
