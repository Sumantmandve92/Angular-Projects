import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from 'src/app/item';
import { Router } from '@angular/router';
import { KeyWithDetails } from 'src/app/key-with-details';
import { ServicesService } from 'src/app/services.service';
console.warn("hi from seller login");
@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent implements OnInit {
  // ===============================================================================
  url: string = "http://localhost:8080/";

  sellerItems: Item[];


  constructor(private serve: ServicesService, private router: Router) {
    console.warn("hi from seller login constr");

  }
username:string;

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
  registerNewSeller(reg: NgForm) {


    this.serve.http.post(this.serve.url + "c2reateAccountForSeller", reg).subscribe(
      (num: number) => {
        if(num==-1)
        {
          window.alert("Already registered");
        }
        else if(num==1)
        {
          window.alert("registered successfully");
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
  login(log: NgForm) {

    this.serve.http.post(this.serve.url + "sellerLogin", log).subscribe(
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
          
          this.serve.isLoggedIn = 2;
          
          window.alert("Seller login successfully");
          this.serve.sellerUsername=this.username
          this.router.navigate(['sell']);

        }
        else {
          window.alert("Internate connection Error.....!!!")
        }
      }
    );

  }
}
