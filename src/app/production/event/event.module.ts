import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventcreationcComponent } from './eventcreationc/eventcreationc.component';
import { AlleventscComponent } from './alleventsc/alleventsc.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { SliderModule } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import {EditorModule} from 'primeng/editor';
import { PaginatorModule } from 'primeng/paginator';
import { SingleeventviewComponent } from './singleeventview/singleeventview.component';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CoopeventmanagerComponent } from './coopeventmanager/coopeventmanager.component';



@NgModule({
  declarations: [
    EventcreationcComponent,
    AlleventscComponent,
    SingleeventviewComponent,
    CoopeventmanagerComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    FormsModule,
    TableModule,
    RatingModule,
    ButtonModule,
    SliderModule,
    InputTextModule,
    ToggleButtonModule,
    RippleModule,
    MultiSelectModule,
    DropdownModule,
    ProgressBarModule,
    ToastModule,
    EditorModule,
    PaginatorModule,
    CardModule,
    DialogModule,
    ConfirmDialogModule,


  ]
})
export class EventModule { }
