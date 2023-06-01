import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
 
  allcategories:any=[];
  subcategory:any=[];
  products:any=[];
pageno:any
pagenoarry:any=[];
loading:boolean=false;

  constructor(private _ProductsService:ProductsService)
  {

  }
  ngOnInit(): void {
    this.loading=true;
    this._ProductsService.products(this.pageno).subscribe({
  next:(data)=>{
    var pagesize=data.products.length;
    for(var i=1;i<=pagesize;i++)
    {
      this.pagenoarry.push(i);
    }
    console.log(
    this.products=data.products)
    this.loading=false
  }
     });
     
    }
    getallproductsbypage(pagenum:number)
    {
      this.loading=true;
      this._ProductsService.products(pagenum).subscribe({
        next:(data)=>{console.log(this.products=data.products)
          this.loading=false
        }
           })
    }

    getsubproducts(id:any)
    {
      this._ProductsService.getSubproducts(id).subscribe({
        next:(data)=>{console.log(this.subcategory=data.subcategory)}
           });
    }
   
}
