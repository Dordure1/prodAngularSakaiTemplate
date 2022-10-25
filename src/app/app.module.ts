import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule } from '@angular/forms';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { MenuItemContent, MenuModule } from 'primeng/menu';
import { NavbarcComponent } from './production/navbar/navbarc/navbarc.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent, NavbarcComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        MenubarModule,
        MenuModule,
        FormsModule,
        TabMenuModule,
        ButtonModule,
        CommonModule,

    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
