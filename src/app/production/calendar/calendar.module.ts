import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarcComponent } from './calendarc/calendarc.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { CalendarsRoutingModule } from './calendar-routing.module';
import { MenuModule } from 'primeng/menu';
import { NavbarRoutingModule } from '../navbar/navbar-routing.module';


@NgModule({
  declarations: [
    CalendarcComponent,
  ],
  imports: [
    CommonModule,
    CalendarsRoutingModule,
    CommonModule,
    RouterModule,
    ButtonModule,
    TabMenuModule,
    MenubarModule,
    CalendarModule,
    FormsModule,
    MenubarModule,
    MenuModule,
    NavbarRoutingModule,
  ]
})
export class CalendarsModule { }
