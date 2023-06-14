import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  constructor(private _httpclient:HttpClient) { }
token:any=localStorage.getItem("usertoken")
  Addtocart(ProductID:number):Observable<any>
  {
    let data={
      ProductID
    }
    return this._httpclient.post("https://king-prawn-app-3mgea.ondigitalocean.app/cart/add",data,{
      headers:{
        authorization:`Tariq__${this.token}`
      }
    })
  }
}
