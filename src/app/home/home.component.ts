import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

constructor(public serve:ServicesService)
{

}

  ngOnInit(): void {
  }
  // ========================================================================================

  addToCart(item: Item) {
    if (!this.serve.myCart.includes(item)) {
      this.serve.http.post(this.serve.url + "addToCart/" + this.serve.tokan, item.id).subscribe(
        (flag: boolean) => {
          if (flag) {

            this.serve.myCart.push(item);

            window.alert("added to cart");
          }
          else {
            window.alert("not added to cart");
          }
        }
      );

    }
    else
    {
      window.alert("This product is already added in your cart..!!")
    }
  }

 

}
