import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: any[] = [];
  cartCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor() {
    this.getCartItems();
   }

  addToCart(product: any, count: any){
    product.count = count;
    this.products.push(product);
    localStorage.setItem('cart', JSON.stringify(this.products));
    console.log('added Successfully');
    this.cartCount.next(this.products.length);
  }

  getCartItems(){
    this.products = JSON.parse(localStorage.getItem('cart') || '[]');
    this.cartCount.next(this.products.length);
    return this.products;
  }

  removeFromCart(id: any){
    const index = this.products.findIndex(
      product=>product._id == id
    );

    this.products.splice(index, 1);
    this.cartCount.next(this.products.length);
    this.saveCart(this.products);
  }

  saveCart(products: any[]){
    localStorage.setItem('cart', JSON.stringify(products));
  }

  incrementCount(id: any){
    const index = this.products.findIndex(
      product => product._id == id
    );
    this.products[index].count = +this.products[index].count + 1;
  }

  decrementCount(id: any){
    const index = this.products.findIndex(
      product => product._id == id
    );
    this.products[index].count = +this.products[index].count - 1;
  }
}
