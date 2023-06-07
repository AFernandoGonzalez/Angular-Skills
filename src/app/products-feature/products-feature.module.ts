import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';

import { ProductComponent } from './../products/product.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    // CommonModule,
    SharedModule,
    NgxPaginationModule
  ],
  exports : [
    ProductComponent
    
  ]
})
export class ProductsFeatureModule { }
