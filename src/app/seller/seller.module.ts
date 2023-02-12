import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellComponent } from './sell/sell.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShowUploadedItemsComponent } from './show-uploaded-items/show-uploaded-items.component';
import { SellerProfileComponent } from './seller-profile/seller-profile.component';


@NgModule({
  declarations: [
    SellerLoginComponent,
    SellComponent,
    ShowUploadedItemsComponent,
    SellerProfileComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    HttpClientModule,
    FormsModule,
 
  ]
})
export class SellerModule { }
