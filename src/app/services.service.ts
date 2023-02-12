import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from './item';
import { MyCart } from './my-cart';
import { Order } from './order';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(public http:HttpClient,public route:Router) { 
  
  }
  myCart:Item[]=[];
  myCartHistory:MyCart[];
  myorders:Order[]=[];
  mywallet:number;
  categorisedItems:Item[]=[];
  deliveryAddress:string;
  pincode:number;
  tokan:string;
  popularItems:Item[]=[];
  url:string="http://localhost:8081/"
  availableItem:Item[];
  sports: Item[] = [];
  dryFruits: Item[] = [];
  cloths: Item[] = [];
  footware: Item[] = [];
  homeandKitchen: Item[] = [];
  cosmetics: Item[] = [];
  books: Item[] = [];
  vegetables: Item[] = [];
  electronics: Item[] = [];
  hardware: Item[] = [];
  spectacles: Item[] = [];
  pharmaceutical: Item[] = [];
  flowers: Item[] = [];
  jwellery: Item[] = [];
  itemFindByName:Item[];
itemToExplore:Item;
// ===============================================================
// to change header 
isLoggedIn:number=0;
uploadedItems:Item[]=[];
sellerUsername:string;
customerUsername:string;
searchedItem:number=0;
// ===============================================================
// handlers
getMyCart() {
  this.http.get("http://localhost:8081/"+ "getmycart/" + this.tokan).subscribe(
    (data: Item[]) => {

      this.myCart = data;

      console.warn(data);
    }
  );
}
// remove from both side front and back
removeFromBothCart(item:Item)
{
  this.http.post(this.url + "removeFromCart/" + this.tokan,item.id).subscribe(
    (f:boolean)=>
    {
      if(f)
      {
        this.removeFromAngularCart(item);
        window.alert("removed");
      }
      else
      {
        window.alert("swr");
      }
    }
  );

}
removeFromAngularCart(item:Item)
{
  let newcart:Item[]=[];
  for(let i1 of this.myCart)
  {
    if(i1.id!=item.id)
    {
      newcart.push(i1);
    }
  }
  this.myCart=newcart;
}
// =================================================================================
// search products
searchItem:Item[];
showcategory:number=0;
// ================================================================================
addToCart(item: Item) {
  if (!this.myCart.includes(item)) {
    this.http.post(this.url + "addToCart/" + this.tokan, item.id).subscribe(
      (flag: boolean) => {
        if (flag) {

          this.myCart.push(item);

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
showMoreAboutThisItem(product: Item) {
  this.itemToExplore = product;
  this.route.navigate(["exploreItem"]);
}

}
