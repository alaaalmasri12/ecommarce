import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
//ypu can also use pattren validators.pattren regex
export class RegisterComponent {
  constructor(private _authservice:AuthService)
  {

  }
Registerform:FormGroup=new FormGroup({
  userName:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
  email:new  FormControl(null,[Validators.email,Validators.required]),
  password:new FormControl(null,[Validators.required,Validators.maxLength(20)]),
  cPassword:new FormControl(null,[Validators.required,Validators.maxLength(20)]),

})
Register(Register:FormGroup)
{
  if(!Register.invalid)
  {
  this._authservice.Register(Register.value).subscribe({
    next:(data)=>{console.log(data)}
  })
  }
}
}
