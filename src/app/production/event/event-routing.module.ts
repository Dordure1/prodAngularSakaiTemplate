import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlleventscComponent } from './alleventsc/alleventsc.component';
import { EventcreationcComponent } from './eventcreationc/eventcreationc.component';

const routes: Routes = [
  {path:"", component:AlleventscComponent},
  {path : "create", component:EventcreationcComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
