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
  getallproducts():Observable<any>
  {
    return   this._httpclient.get("https://precious-bass-tights.cyclic.app/category");

  }
}
