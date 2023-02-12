import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item';
import { ServicesService } from '../services.service';
import {MatAccordion} from '@angular/material/expansion';


@Component({
  selector: 'app-header',

  templateUrl: './header.component.html',
  
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 

  constructor(public serve: ServicesService, private router: Router) { }

  ngOnInit(): void {
  }
  logout(num: number) {
    this.serve.isLoggedIn = 0;

    if (num == 1) {
      this.serve.tokan = null;
      this.serve.customerUsername = null;
      this.router.navigate([""]);

    }
    else if (num == 2) {
      this.serve.tokan = null;
      this.serve.sellerUsername = null;
      this.router.navigate([""]);
    }

  }

  searchitem:string = "";
  searchProducts(search: string) {
    this.serve.http.get(this.serve.url + "searchProducts/" + search).subscribe(
      (data: Item[]) => {
        
        this.serve.searchItem=data;
        this.serve.showcategory=2;
        console.warn(data);

      }
    );


  }
}

