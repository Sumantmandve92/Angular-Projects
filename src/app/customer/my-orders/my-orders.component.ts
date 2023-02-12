import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/order';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  constructor(public serve: ServicesService,private router:Router) { }

  ngOnInit(): void {
    this.serve.http.get(this.serve.url + "getMyOrders/" + this.serve.tokan).subscribe(
      (orders: Order[]) => {
        if (orders != null) 
        {
          if (orders.length != 0) 
          {
            this.serve.myorders = orders;
          }
          else 
          {
            this.serve.myorders=orders;
            window.alert("No orders");
          }
        }
        else {
          window.alert("SwR")
        }
      }
    );
  }
  cancelOrder(order: Order) {
    if (window.confirm("Are you sure to cancel this order ?")) {
      this.serve.http.post(this.serve.url + "cancelOrder/" + this.serve.tokan, order.id).subscribe(
        (f: boolean) => {
          if (f) {

            window.alert("You canceled an order..");
            
        this. ngOnInit();
           
          }
          else {
            window.alert("SWR");
          }
        }
      );
    }

  }

}
