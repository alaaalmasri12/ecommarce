import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  Result:any=[]

  constructor(private _authservice:AuthService,private _routerlink:Router)
  {

  }
Loginform:FormGroup=new FormGroup({
  email:new  FormControl(null,[Validators.email,Validators.required]),
  password:new FormControl(null,[Validators.required,Validators.maxLength(20)]),
})
Login(Login:FormGroup)
{
  if(!Login.invalid)
  {
  this._authservice.login(Login.value).subscribe({
    next:(data)=>{
      this.Result=data
      console.log(this.Result)

      if(this.Result.message="Done")
      {
this._routerlink.navigate(['/cart'])
localStorage.setItem("usertoken",this.Result.access_token)
console.log(localStorage.getItem("usertoken"))
this._authservice.SaveCureentUser()
      }
     }
  })
  }
}
}
