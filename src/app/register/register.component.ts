import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
//ypu can also use pattren validators.pattren
export class RegisterComponent {
Registerform:FormGroup=new FormGroup({
  userName:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
  email:new  FormControl(null,[Validators.email,Validators.required]),
  password:new FormControl(null,[Validators.required,Validators.maxLength(20)]),
  cPassword:new FormControl(null,[Validators.required,Validators.maxLength(20)]),

})

Register(Register:FormGroup)
{
console.log("testtt");
}
}
