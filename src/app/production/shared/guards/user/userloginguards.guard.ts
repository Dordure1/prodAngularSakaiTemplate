import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceUserService } from '../../services/user/auth-service-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserloginguardsGuard implements CanActivate {
  
  userIsConnected : boolean = false
  constructor(private userAuthServe : AuthServiceUserService){
  }
  
  canActivate(): Observable<boolean> | Promise<boolean > | boolean  {
    this.userIsConnected = this.userAuthServe.isConnectUser
    if(this.userIsConnected)
      return true;
    else  
      return false
  }
  
}
