import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from '../cart-service.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  ProductId:any
Productdetails:any=[]
SubIMages:any=[]
constructor(private _productservice:ProductsService,private _activtedroute:ActivatedRoute,private _cartservice:CartServiceService)
{
  console.log("test");
}
ngOnInit(): void {
  {
  this.ProductId=this._activtedroute.snapshot.params['id'];
  this.Productdetails=this._productservice.productdetails(this.ProductId).subscribe({
    next: (data) => {
      this.Productdetails=data.product
      this.SubIMages=data.product.subImages
      console.log(this.Productdetails,"product details");

    console.log(this.SubIMages,"subimages");
    }
  })
  }
}
}
