import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';

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
  

  constructor() { }

  ngOnInit(): void {
  }
 
}
