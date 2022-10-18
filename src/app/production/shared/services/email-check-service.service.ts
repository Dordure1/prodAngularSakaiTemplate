import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of,map, Observable } from 'rxjs';
import { newUser } from '../class/newUser';
import { user } from '../class/users';

@Injectable({
  providedIn: 'root'
})
export class EmailCheckServiceService {

  url : string = "http://localhost:3000/"
  
  constructor(
    private client : HttpClient
    ) { }

  checkUser(email : any):Observable<user[]>{
       return this.client.get<user[]>(this.url+"coop")
      .pipe(
        map((res)=>{
          let tmp : any[] = []

          res.forEach(element => { 
            
            if(element.userName == email){
              console.log("ok");
              console.log(element);
              
               tmp.push(element)
            }
          })
          
          return tmp
          
        }
        )
      )
  }
}
