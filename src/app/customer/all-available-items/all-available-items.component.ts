import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/item';
import { MyCart } from 'src/app/my-cart';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-all-available-items',
  templateUrl: './all-available-items.component.html',
  styleUrls: ['./all-available-items.component.css']
})
export class AllAvailableItemsComponent implements OnInit {

  constructor(public serve: ServicesService, private route: Router) { }

  ngOnInit(): void {
    this.serve.http.get(this.serve.url + "getPopularItems").subscribe(
      (data: Item[]) => {

        if (data != null) {
          this.serve.popularItems = data;
        }
        else {
          window.alert("doesn't load popular Items......!");
        }
      }
    );
    this.serve.getMyCart()
  }

  
  // ==============================================================================================



  getItemsByCategory(category: string) {
    this.serve.http.get(this.serve.url + "getItemsByCategory/" + category).subscribe(
      (data: Item[]) => {
        this.serve.categorisedItems = data;
        console.warn("hi");
        this.serve.showcategory = 1;
        console.warn(data);
      }
    );

  }
  // =========================================================================================================
  // show more info about given prduct

  // =====================================================================================================
  // add this item to my cart

  isAddedTocart(item: Item) {
    if (this.serve.myCart.includes(item)) {
      return false;
    }
    else {


      return true;

    }
  }

}
