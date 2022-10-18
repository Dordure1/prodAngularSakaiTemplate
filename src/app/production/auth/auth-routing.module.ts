import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './loginCoop/login.component';
import { LoginuserComponent } from './loginuser/loginuser/loginuser.component';
import { RegisterComponent } from './registerCoop/register.component';
import { RegisteruserComponent } from './registeruser/registeruser/registeruser.component';
import { YouarecComponent } from './youare/youarec/youarec.component';

const routes: Routes = [
  {path:'', component:YouarecComponent},
  {path:'loginCoop', component:LoginComponent},
  {path:'registerCoop', component:RegisterComponent},
  {path:'loginUser', component:LoginuserComponent},
  {path:'registerUser', component:RegisteruserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
