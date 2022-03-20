import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { SharedModule } from 'src/app/shared/shared.module';






@NgModule({
  declarations: [
    OrdersComponent,
    OrderDetailsComponent,
    
    
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule
  ],
  exports:[
    OrdersComponent
  ]
})
export class OrdersModule { }
