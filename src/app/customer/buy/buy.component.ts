import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/item';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  constructor(public serve:ServicesService , private route:Router) { }

  itemFindByName:Item[]
  ngOnInit(): void {
    this.itemFindByName=this.serve.itemFindByName
    
  }
 
  exploreItem(item:Item)
  {
    this.serve.itemToExplore=item;
    this.route.navigate(["exploreItem"])
  }
}
