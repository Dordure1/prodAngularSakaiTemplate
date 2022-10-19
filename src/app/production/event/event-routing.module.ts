import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlleventscComponent } from './alleventsc/alleventsc.component';
import { CoopeventmanagerComponent } from './coopeventmanager/coopeventmanager.component';
import { EventcreationcComponent } from './eventcreationc/eventcreationc.component';
import { SingleeventviewComponent } from './singleeventview/singleeventview.component';

const routes: Routes = [
  {path:"", component:AlleventscComponent},
  {path:"event/:eventId", component:SingleeventviewComponent},
  {path : "create", component:EventcreationcComponent},
  {path : "myevent", component:CoopeventmanagerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
