import { Component } from '@angular/core';
import { Item } from './item';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VEGA_MALL';
  constructor(public serve: ServicesService) {
  //   this.serve.http.get(this.serve.url + "listOfAvailableItem").subscribe(
  //     (availableItem: Item[]) => {

  //       for (let item of availableItem) {
  //         item.regulardisc=(100-item.regulardisc)*item.price/100;
  //         item.primedisc=(100-item.primedisc)*item.price/100;
  //         if (item.category =="sports") {
  //           this.serve.sports.push(item);
            
  //         }
  //         else if (item.category == "dryFruits") {
  //           this.serve.dryFruits.push(item);

  //         }
  //         else if (item.category == "cloths") {
  //           this.serve.cloths.push(item);
  //         }
  //         else if (item.category == "footware") {
  //           this.serve.footware.push(item);
  //         }
  //         else if (item.category == "homeandKitchen") {
  //           this.serve.homeandKitchen.push(item);
  //         }
  //         else if (item.category == "cosmetics") {
  //           this.serve.cosmetics.push(item);
  //         }
  //         else if (item.category == "books") {
  //           this.serve.books.push(item);
  //         }
  //         else if (item.category == "vegetables") {
  //           this.serve.vegetables.push(item);
  //         }
  //         else if (item.category == "hardware") {
  //           this.serve.hardware.push(item);
  //         }
  //         else if (item.category == "spectacles") {
  //           this.serve.spectacles.push(item);
  //         }
  //         else if (item.category == "pharmaceutical") {
  //           this.serve.pharmaceutical.push(item);
  //         }
  //         else if (item.category == "flowers") {
  //           this.serve.flowers.push(item);
  //         }
  //         else if (item.category == "jwellery") {
  //           this.serve.jwellery.push(item);
  //         }
  //       }


  //       console.warn("hi from home");
  //       console.warn(this.serve.sports);
  //       this.serve.availableItem = availableItem;
      

  //     }
  //   );
  }
}
