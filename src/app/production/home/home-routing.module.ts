import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecComponent } from './homec/homec.component';

const routes: Routes = [
  {path:"", component:HomecComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
