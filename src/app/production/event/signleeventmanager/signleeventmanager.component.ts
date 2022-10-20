import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { eventTab } from '../../shared/class/event';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-signleeventmanager',
  templateUrl: './signleeventmanager.component.html'
})
export class SignleeventmanagerComponent implements OnInit {

  display :boolean = true

  @Input() id !: number 
  @Input () name:string =""
  @Input () description : string = ""
  @Input () address : string = ""
  @Input () date : string = ""
  @Input () city : string = ""
  
  constructor(private eventServe : EventService, private router : Router) { }

  ngOnInit(): void {
  }
  
   modifyEvent(){
    let tmp : any[] = [this.description , this.city , this.date]
      this.eventServe.modifyEvent(tmp, this.id).subscribe(x=>{      
        window.location.reload()
      })   
     }
     
  updateDesc(updateDesc : string){
        this.description = updateDesc
  }

  updateCity(updatedCity : string){
      this.city  = updatedCity
  }

}
