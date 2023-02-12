import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MySecurityGuardGuard } from '../my-security-guard.guard';
import { SellComponent } from './sell/sell.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerProfileComponent } from './seller-profile/seller-profile.component';
import { ShowUploadedItemsComponent } from './show-uploaded-items/show-uploaded-items.component';

const routes: Routes = [
  {
    path:"sellerLogin",
    component:SellerLoginComponent
  },
  {
    path:"sell",
    component:SellComponent,
    canActivate:[MySecurityGuardGuard]
  },
  {
    path:"Sellerprofile",
    component:SellerProfileComponent,
    canActivate:[MySecurityGuardGuard]
  },
  {
    path:"showUploadedProducts",
    component:ShowUploadedItemsComponent,
    canActivate:[MySecurityGuardGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
