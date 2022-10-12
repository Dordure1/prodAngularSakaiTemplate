import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbarc',
  templateUrl: './navbarc.component.html'
})
export class NavbarcComponent implements OnInit {
  items: MenuItem[] = [];
  constructor() {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home'},
      {label: 'check Calendar', icon: 'pi pi-fw pi-calendar'},
      {label: 'Create an event', icon: 'pi pi-fw pi-pencil'},
      // {label: 'Documentation', icon: 'pi pi-fw pi-file'},
      // {label: 'Settings', icon: 'pi pi-fw pi-cog'}
  ];
   }

  ngOnInit(): void {
  }

}
