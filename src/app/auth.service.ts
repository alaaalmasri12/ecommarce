import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpclient:HttpClient ) { }
  Register(user:any)
  {
    return   this._httpclient.post(`https://knowledge-ecommerce.cyclic.app/auth/signup`,user);

  }
  login(user:any)
  {
    return   this._httpclient.post(`https://knowledge-ecommerce.cyclic.app/auth/login`,user);

  }
}
