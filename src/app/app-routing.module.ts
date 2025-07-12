import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyCartComponent } from './my-cart/my-cart.component';

const routes: Routes = [
  {path:'', component: HomeComponent , title :"home"},
  {path:'myCart' , component: MyCartComponent , title :"My Cart"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
