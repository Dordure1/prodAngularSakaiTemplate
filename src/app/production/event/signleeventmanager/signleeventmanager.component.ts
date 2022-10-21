import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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
  
 
  @ViewChild('input1') input1 : any
  @ViewChild('input2') input2 : any
  @ViewChild('input3') input3 : any

  editable : boolean = false

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

  updateAddress(updatedAddress : string){
      this.address  = updatedAddress
  }
  updateDate(updatedDate : string){
      this.date  = updatedDate
  }

  enableModify(){
    this.editable = true
  }

}
