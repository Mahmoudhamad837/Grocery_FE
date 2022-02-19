import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule } from './address-routing.module';
import { AddressComponent } from './address.component';
import { EditComponent } from './edit/edit.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddressComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    AddressRoutingModule,
    NzCardModule,
    NzSkeletonModule,
    NzIconModule,
    NzPopoverModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    AddressComponent,
    EditComponent
  ]
})
export class AddressModule { }
