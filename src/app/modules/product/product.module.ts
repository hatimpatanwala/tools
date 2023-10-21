import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListComponent } from './component/list/list.component';
import { CreateComponent } from './component/create/create.component';
import { ProductLineItemComponent } from './component/product-line-item/product-line-item.component';
import { ProductListComponent } from './component/product-list/product-list.component';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    ProductLineItemComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
