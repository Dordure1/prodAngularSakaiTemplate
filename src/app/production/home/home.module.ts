import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomecComponent } from './homec/homec.component';
import { NavbarcComponent } from '../navbar/navbarc/navbarc.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomecComponent,
    NavbarcComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    ButtonModule,
    TabMenuModule,
    MenubarModule,
    CalendarModule,
    FormsModule
  ]
})
export class HomeModule { }
