import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';
import { CalendarModule } from 'primeng/calendar';
import { NavbarcComponent } from './navbarc/navbarc.component';
import { MenuItemContent, MenuModule } from 'primeng/menu';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    // NavbarcComponent
  ],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    ButtonModule,
    RouterModule,
    TabMenuModule,
    MenubarModule,
    MenuModule,
    // MenuItemContent,
    CalendarModule,
    FormsModule
  ]
})
export class NavbarModule { }
