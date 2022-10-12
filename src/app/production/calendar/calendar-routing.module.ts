import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarcComponent } from './calendarc/calendarc.component';

const routes: Routes = [
  {path:"",component:CalendarcComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarsRoutingModule { }
