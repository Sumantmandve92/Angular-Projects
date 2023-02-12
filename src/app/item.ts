import { File } from "./file";


export class Item {
    id:number;
    itemname:string;
    price:number;
    qty:number;
    brand:string;
    category:string;
    file:File;
    subcategory:string;
	purchasePrice:number;
	regulardisc:number;
	primedisc:number;
	ratingstar:number;
    numberofdelivariesdone:number;

}
