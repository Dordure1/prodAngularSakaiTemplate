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

    selectedState: any;
  ///event data
  organizationName : string=""
  eventName :string = ""
  email : string = ""
  city : string = ""
  address : string = ""
  addressNumber:number =0
  maxPers:number = 0
  date! : Date
  description : string =""
  eventType : string =""

  dropdownItems = [
    { name: 'alimentary', code: 'Option 1' },
    { name: 'family activity', code: 'Option 2' },
    { name: 'festival', code: 'Option 3' },
    { name: 'Other', code: 'Option 4' },
];



  constructor(
    private eventServe : EventService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getOrganizationName()
  }
  createEvent(){
    this.description = this.description.replace( /(<([^>]+)>)/ig, '');
     this.eventServe.createEvent(this.organizationName,this.eventName,this.email,this.city,this.address,this.addressNumber,this.maxPers, this.date, this.description, this.eventType)
     this.router.navigate(['/event/myevent'])
    }

    getOrganizationName(){
        this.eventServe.getOrganizationName().forEach((x: any)=>{
            x.forEach((res:any)=> {
                this.organizationName = res.organisationName    

            })
        })
    }
}
