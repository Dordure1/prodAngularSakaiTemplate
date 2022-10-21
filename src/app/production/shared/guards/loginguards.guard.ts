import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServicesService } from '../services/coop/auth-services.service';

@Injectable({
  providedIn: 'root'
})
export class LoginguardsGuard implements CanActivate {

  coopIsConnected : boolean = false
   constructor(private coopAuthServe : AuthServicesService){

   }


   canActivate(): Observable<boolean> | Promise<boolean > | boolean  {

    this.coopIsConnected = this.coopAuthServe.isConnect
    if(this.coopIsConnected)
      return true
    else
      return false  

  }
  
}
