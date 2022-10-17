import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { PasswordModule } from 'primeng/password';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { YouarecComponent } from './youare/youarec/youarec.component';
import {SplitterModule} from 'primeng/splitter';
import {CardModule} from 'primeng/card';



@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    YouarecComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PasswordModule,
    FormsModule,
    CheckboxModule,
    ButtonModule,
    ReactiveFormsModule,
    SplitterModule,
    CardModule
  ]
})
export class AuthModule { }
