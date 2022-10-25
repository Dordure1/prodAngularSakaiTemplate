import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './loginCoop/login.component';
import { RegisterComponent } from './registerCoop/register.component';
import { PasswordModule } from 'primeng/password';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { YouarecComponent } from './youare/youarec/youarec.component';
import {SplitterModule} from 'primeng/splitter';
import {CardModule} from 'primeng/card';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    YouarecComponent,
    LoginuserComponent,
    RegisteruserComponent
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
    CardModule,
    ToastModule,
  ]
})
export class AuthModule { }
