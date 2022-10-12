import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-homec',
  templateUrl: './homec.component.html',
})
export class HomecComponent implements OnInit {


  constructor(public layoutService : LayoutService) { 
  }
  ngOnInit(): void {
  }
}