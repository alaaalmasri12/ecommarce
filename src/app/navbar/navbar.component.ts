import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
login:boolean=false
constructor(private _authservice:AuthService,private _router:Router)
{ 
}
logout()
{
  localStorage.removeItem("usertoken")
  this._authservice.Curentuser.next(null);
  this._router.navigate(['/login'])
}
}
