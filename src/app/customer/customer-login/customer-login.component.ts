import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from 'src/app/item';
import { KeyWithDetails } from 'src/app/key-with-details';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  // ===============================================================================
  url: string = "http://localhost:8080/";

  sellerItems: Item[];


  constructor(private serve: ServicesService, private router: Router) {
    console.warn("hi from customer login constr");

  }

  ngOnInit(): void {
  }
  // =====================================================================================
  // toggel register and login form
  newAccount: number = 0
  showNewAccountForm(num: number) {
    this.newAccount = num;
  }
  // =====================================================================================
  // New registration
  registerNewCustomer(reg: NgForm) {


    this.serve.http.post(this.serve.url + "createAccount", reg).subscribe(
      (num: number) => {
        if(num==-1)
        {
          window.alert("Already registered");
        }
        else if(num==1)
        {
          window.alert("registered successfully");
          this.newAccount=0;
        }
        else
        {
          window.alert("SWR");
        }

      }
    );
  }
  // ====================================================================================
  // Seller login
  customerUsername:string;
  login(log: NgForm) {

    this.serve.http.post(this.serve.url + "login", log).subscribe(
      (keyWithDetails: KeyWithDetails) => {
        console.warn(keyWithDetails.tokan);

        if (keyWithDetails.status == -1) {
          // this.listOfitemPurchased(reg);
          window.alert("Wrong password");

        }
        else if (keyWithDetails.status == -2) {
          window.alert("Wrong username");
        }
        else if (keyWithDetails.status == 0) {
          window.alert("something went wrong");
        }
        else if (keyWithDetails.status == 1) {

          this.serve.tokan = keyWithDetails.tokan;
          this.serve.myCart=keyWithDetails.mycart;
          
       
          this.serve.mywallet=keyWithDetails.mywallet;
          this.serve.customerUsername=this.customerUsername;
          this.serve.deliveryAddress=keyWithDetails.deliveryaddress;
          this.serve.pincode=keyWithDetails.pincode;
          this.serve.isLoggedIn = 1;
          this.router.navigate(["allItems"]);
          window.alert("login successfully");
        }
        else {
          window.alert("Internate connection Error.....!!!")
        }
      }
    );

  }

}
