import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {StepsModule} from 'primeng/steps';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import {InputMaskModule} from 'primeng/inputmask';

const modules = [
  NzTabsModule,
  NzIconModule,
  StepsModule,
  NzSliderModule,
  InputMaskModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modules
  ],
  exports:[
    modules
  ]
})
export class SharedModule { }
