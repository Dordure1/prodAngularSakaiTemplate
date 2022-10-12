import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';
import { CalendarModule } from 'primeng/calendar';
import { NavbarcComponent } from './navbarc/navbarc.component';


@NgModule({
  declarations: [
    NavbarcComponent
  ],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    ButtonModule,
    RouterModule,
    TabMenuModule,
    MenubarModule,
    CalendarModule,
  ]
})
export class NavbarModule { }
