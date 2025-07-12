import { Component } from '@angular/core';
import { ApiDataService } from '../api-data.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.scss'
})
export class ShoppingComponent {
  Data:any[] = [];
  constructor(private _ApiDataService:ApiDataService){
    this._ApiDataService.getData().subscribe((data)=>{
      this.Data = data;
      console.log(this.Data);
    })
  }


  messageVisible = false ; 
  showMsg(){
    this.messageVisible = true ; 
    setTimeout(() => {
      this.messageVisible = false;
    }, 2000);
  }

addToCart(item: any) {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const existing = cart.find((i: any) => i.id === item.id);

  if (!existing) {
    item.quantity = 1;
    cart.push(item);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
}


}
