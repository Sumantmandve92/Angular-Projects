import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/item';
import { ServicesService } from 'src/app/services.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public serve: ServicesService, private router: Router) { }

  ngOnInit(): void {

  }
  count: number = 1;
  counter(num: number) {
    if (num > 0) {
      this.count++
    }
    else {
      if (this.count >= 2) {
        this.count--;
      }
    }
  }
  buy(item: Item) {

    if ((this.serve.mywallet - (this.count * item.price)) >= 0) {
      this.serve.http.post(this.serve.url + "buy/" + this.count + "/" + this.serve.tokan, item.id).subscribe(
        (num: number) => {
          if (num > 0) {
console.warn(num);
            this.serve.getMyCart();
            this.serve.mywallet = this.serve.mywallet - (this.count * item.price);
            this.serve.removeFromAngularCart(item);
            this.count = 1;
            window.alert("Your order has placed . Check your email to see order details...")
          }
          else if (num == -1) {
            window.alert("this product is out of stock")
          }
          else {
            window.alert("something went wrong")
          }
        }
      );
    }
    else {
      window.alert("You hava not enough balance");
    }
  }
}
