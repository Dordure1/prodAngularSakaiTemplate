import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthServicesService } from '../../shared/services/coop/auth-services.service';
import { AuthServiceUserService } from '../../shared/services/user/auth-service-user.service';

@Component({
  selector: 'app-navbarc',
  templateUrl: './navbarc.component.html'
})
export class NavbarcComponent implements OnInit {
  isConnect : boolean = false
  isConnectUser : boolean = false
  
  items: MenuItem[] = [];
  
  constructor(
    private router : Router, 
    private authServe : AuthServicesService,
    private authUserServe : AuthServiceUserService
    ) {
    
    
      this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', command:() => this.navToHome()},
      {label: 'myEvent', icon: 'pi pi-fw pi-calendar', command:() => this.navToMyEvent()},
      {label: 'Check Events', icon: 'pi pi-fw pi-pencil', command:()=>this.navToEvents()},
      {label: 'Create an event', icon: 'pi pi-fw pi-pencil', command:()=>this.navToEventsCreation()},
    ];
   }
  ngOnInit(): void {
    this.authServe.$isConnect.subscribe((isConnect:boolean)=>{
      this.isConnect = isConnect
    })
    this.authUserServe.$isConnectUser.subscribe((isConnectUser:boolean)=>{
      this.isConnectUser = isConnectUser
    })

  }

  navToHome(){
    this.router.navigate([''])
  }

  navToMyEvent(){
    this.router.navigate(['/event/myevent'])
  }

  navToLoginMain(){
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
    this.authUserServe.logOut()
  }
}
