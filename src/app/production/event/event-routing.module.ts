import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginguardsGuard } from '../shared/guards/loginguards.guard';
import { UserloginguardsGuard } from '../shared/guards/user/userloginguards.guard';
import { AlleventscComponent } from './alleventsc/alleventsc.component';
import { CoopeventmanagerComponent } from './coopeventmanager/coopeventmanager.component';
import { EventcreationcComponent } from './eventcreationc/eventcreationc.component';
import { SingleeventviewComponent } from './singleeventview/singleeventview.component';
import { UserregistredeventComponent } from './userregistredevent/userregistredevent.component';

const routes: Routes = [
  {path:"", canActivate:[UserloginguardsGuard], component:AlleventscComponent},
  {path:"event/:eventId", canActivate:[UserloginguardsGuard], component:SingleeventviewComponent},
  {path : "create", canActivate:[LoginguardsGuard],component:EventcreationcComponent},
  {path : "myevent",  canActivate:[LoginguardsGuard], component:CoopeventmanagerComponent},
  {path : "userevent", canActivate:[UserloginguardsGuard],component:UserregistredeventComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
