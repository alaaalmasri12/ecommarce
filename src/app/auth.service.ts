import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
Curentuser:any=new BehaviorSubject(null)
stats:boolean=false;
  constructor(private _httpclient:HttpClient,private _router:Router ) { 
    if(localStorage.getItem("usertoken") !=null)
    {
      this.SaveCureentUser()
    }
  }
  Register(user:any)
  {
    return   this._httpclient.post(`https://king-prawn-app-3mgea.ondigitalocean.app/auth/signup`,user);

  }
  SaveCureentUser()
  {
    let Token= JSON.stringify(localStorage.getItem("usertoken"));
    let decode=jwtDecode(Token)
    this.Curentuser.next(decode)
  }

  login(user:any)
  {
    return   this._httpclient.post(`hhttps://king-prawn-app-3mgea.ondigitalocean.app/auth/login`,user);

  }
}


