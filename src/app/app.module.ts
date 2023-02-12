import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';
import { SellerModule } from './seller/seller.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomerModule } from './customer/customer.module';
import { SearchedItemComponent } from './searched-item/searched-item.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SearchedItemComponent,
    PaymentComponent,
   
   
    
  ],
  exports:[NgForm],
  imports: [
    BrowserModule,
    AppRoutingModule,
  CustomerModule,
    SellerModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
