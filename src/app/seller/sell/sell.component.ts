import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from 'src/app/item';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  constructor(private serve: ServicesService) { }

  ngOnInit(): void {
  }
  // =========================================================================
  category:string="none";

  // =========================================================================
  addItemsDataBase(item: NgForm) {
    if (item != null) 
    {
      this.serve.http.post(this.serve.url+"s2ellitem/" + this.serve.tokan, item).subscribe(
        (item1: Item) => {
          if(item1!=null){
          let listitem:Item[]=this.serve.uploadedItems;
          listitem.push(item1);
          this.serve.uploadedItems=listitem;
          window.alert("item added successfully");
          }
          else{window.alert("swr");
        }
        }
      );
    }
    else {
      window.alert("Not added .....!");
    }
  }
}
