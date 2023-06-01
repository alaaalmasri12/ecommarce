import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpclient:HttpClient) 
  { 

  }
  getallproductsCategoires():Observable<any>
  {
    return   this._httpclient.get("https://knowledge-ecommerce.cyclic.app/category");

  }
  products(pageNo:number):Observable<any>
  {
    return   this._httpclient.get(`https://knowledge-ecommerce.cyclic.app/product/?page=${pageNo}`);

  }
  getSubproducts(id:any):Observable<any>
  {
    return   this._httpclient.get(`https://knowledge-ecommerce.cyclic.app/category/${id}/subcategory`);

  }
  productdetails(id:any):Observable<any>
  {
    return   this._httpclient.get(`https://knowledge-ecommerce.cyclic.app/product/${id}`);

  }
 
}
