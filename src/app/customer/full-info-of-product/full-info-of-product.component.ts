import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/item';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-full-info-of-product',
  templateUrl: './full-info-of-product.component.html',
  styleUrls: ['./full-info-of-product.component.css']
})
export class FullInfoOfProductComponent implements OnInit {

  constructor(public serve: ServicesService ,private router:Router) { }

  ngOnInit(): void {
  }

  addToCart(num: number) {
    this.serve.http.post(this.serve.url + "addToCart/" + this.serve.tokan, num).subscribe(
      (f: boolean) => {
        if (f) {
          this.serve.myCart.push(this.serve.itemToExplore);
          window.alert("This Product added to your cart.Go to your cart and buy it.");
        }
        else
        {
          window.alert("This Product is not added to your cart...!! try Again.");

        }
      }
    );

  }
  presentInCart(item:Item)
  {
    if(this.serve.myCart.includes(item))
    {
      return false;
    }
    else
    {
      return true;
    }
  }
  goToCart()
  {
    this.router.navigate(["mycart"]);
  }
}
