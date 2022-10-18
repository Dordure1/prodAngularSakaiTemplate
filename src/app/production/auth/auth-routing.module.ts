import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './loginCoop/login.component';
import { RegisterComponent } from './registerCoop/register.component';
import { YouarecComponent } from './youare/youarec/youarec.component';

const routes: Routes = [
  {path:'', component:YouarecComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
