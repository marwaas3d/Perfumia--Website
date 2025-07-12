import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {
  cartItems: any[] = [];
  quantities: { [id: string]: number } = {};
  totalPrice:number = 0 ;

ngOnInit() {
  const storedCart = localStorage.getItem('cart');
  this.cartItems = storedCart ? JSON.parse(storedCart) : [];

  this.cartItems.forEach(item => {
    this.quantities[item.id] = 1;
  });

  this.calculateTotalPrice(); // احسبي التوتال أول ما الصفحة تفتح
}

increment(item: any) {
  this.quantities[item.id] = (this.quantities[item.id] || 1) + 1;
  this.calculateTotalPrice();
}

decrement(item: any) {
  if (this.quantities[item.id] > 1) {
    this.quantities[item.id]--;
  } else {
    this.deleteItem(item.id);
  }
  this.calculateTotalPrice();
}

deleteItem(id: any) {
  this.cartItems = this.cartItems.filter(item => item.id !== id);
  delete this.quantities[id];
  this.calculateTotalPrice();
}



  calculateTotalPrice() {
  this.totalPrice = this.cartItems.reduce((sum, item) => {
    const quantity = this.quantities[item.id] || 1;
    return sum + (item.price * quantity);
  }, 0);
}

}
