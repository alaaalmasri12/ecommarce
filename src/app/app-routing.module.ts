import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:"home",component:HomeComponent,title:'A-Shop-home'},
  {path:"register",component:RegisterComponent,title:'A-Shop-register'},
  {path:"login",component:LoginComponent,title:'A-Shop-login'},
  {path:"products",component:ProductsComponent,title:'A-shop-products'},
  {path:"home",component:HomeComponent,title:'A-shop-home'},
  {path:"**",component:NotFoundComponent,title:'not found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
