import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
//ypu can also use pattren validators.pattren regex
export class RegisterComponent {
  emailexist:any
  confirmpassword:any
  Result:any
  loading:boolean=false;
  constructor(private _authservice:AuthService,private _router:Router)
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
    this.loading=true
  this._authservice.Register(Register.value).subscribe({
    next:(data)=>{console.log(data)
      this.Result=data
    if(this.Result.message="Done")
    {
this._router.navigate(['/login'])
this.loading=false
    }
    },
    error:(error)=>{
if(error.status=="409")
{
 this.emailexist=error.message
 this.loading=false
}
else if(error.status=="400")
{
this.confirmpassword="Password must be matched"
this.loading=false

}
    }
  })
  }
}
}
