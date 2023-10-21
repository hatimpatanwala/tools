import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsRoutingModule } from './brands-routing.module';
import { CreateComponent } from './component/create/create.component';
import { ListComponent } from './component/list/list.component';


@NgModule({
  declarations: [
    CreateComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    BrandsRoutingModule
  ]
})
export class BrandsModule { }
