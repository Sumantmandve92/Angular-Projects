import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { BuyComponent } from './buy/buy.component';
import { FormsModule } from '@angular/forms';
import { AllAvailableItemsComponent } from './all-available-items/all-available-items.component';
import { FullInfoOfProductComponent } from './full-info-of-product/full-info-of-product.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    CustomerLoginComponent,
    BuyComponent,
    AllAvailableItemsComponent,
    FullInfoOfProductComponent,
    MyOrdersComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule
  
  ]
})
export class CustomerModule { }
