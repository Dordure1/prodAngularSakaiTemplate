import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-eventcreationc',
  templateUrl: './eventcreationc.component.html',
  styles: [`
        :host ::ng-deep  .p-frozen-column {
            font-weight: bold;
        }

        :host ::ng-deep .p-datatable-frozen-tbody {
            font-weight: bold;
        }

        :host ::ng-deep .p-progressbar {
            height:.5rem;
        }
    `]
})
export class EventcreationcComponent implements OnInit {
  ///event data
  organizationName : string=""
  eventName :string = ""
  email : string = ""
  city : string = ""
  address : string = ""
  addressNumber:number =0
  maxPers:number = 0
  date : string = ""
  description : string =""



  constructor(
    private eventServe : EventService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }
  createEvent(){
     this.eventServe.createEvent(this.organizationName,this.eventName,this.email,this.city,this.address,this.addressNumber,this.maxPers, this.date, this.description)
     this.router.navigate(['/event'])
    }
}
