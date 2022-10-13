import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomecComponent } from './homec/homec.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';



@NgModule({
  declarations: [
    HomecComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    ButtonModule,
    TabMenuModule,
    MenubarModule,
    CalendarModule,
    FormsModule,
    DividerModule,
    RouterModule
  ]
})
export class HomeModule { }
