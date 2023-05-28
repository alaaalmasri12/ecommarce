import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  allcategories:any=[];
  constructor(private _ProductsService:ProductsService)
  {

  }
  ngOnInit(): void {
    this._ProductsService.getallproducts().subscribe({
  next:(data)=>{console.log(this.allcategories=data.category)}
     });
     
    }
}
