import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MySecurityGuardGuard } from '../my-security-guard.guard';
import { AllAvailableItemsComponent } from './all-available-items/all-available-items.component';
import { BuyComponent } from './buy/buy.component';
import { CartComponent } from './cart/cart.component';


import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { FullInfoOfProductComponent } from './full-info-of-product/full-info-of-product.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

const routes: Routes = [
  {
    path:"customerLogin",
    component:CustomerLoginComponent
  },
  {
    path:"buy",
    component:BuyComponent,
    canActivate:[MySecurityGuardGuard]
  },
  {
    path:"allItems",
    component:AllAvailableItemsComponent
  },
  {
    path:"exploreItem",
    component:FullInfoOfProductComponent
  },
  {
    path:"mycart",
    component:CartComponent,
    canActivate:[MySecurityGuardGuard]

  },
  {
    path:"myorders",
    component:MyOrdersComponent,
    canActivate:[MySecurityGuardGuard]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
