import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/demo/api/customer';

@Component({
  selector: 'app-alleventsc',
  templateUrl: './alleventsc.component.html'
})
export class AlleventscComponent implements OnInit {
  customers1: Customer[] = [];
  constructor() { }

  ngOnInit(): void {

  }

}
