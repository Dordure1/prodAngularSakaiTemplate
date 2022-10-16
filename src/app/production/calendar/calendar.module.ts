import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarcComponent } from './calendarc/calendarc.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import { FormsModule } from '@angular/forms';
import { CalendarsRoutingModule } from './calendar-routing.module';





@NgModule({
  declarations: [
    CalendarcComponent,
  ],
  imports: [
    CommonModule,
    CalendarsRoutingModule,
    RouterModule,
    ButtonModule,
    FormsModule,   
  ]
})
export class CalendarsModule { }
