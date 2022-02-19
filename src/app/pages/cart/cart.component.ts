import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: any[] = [];
  totalPrice: any = 0;
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getCartProducts();
  }

  getCartProducts(){
    this.products = this.cartService.getCartItems();
    this.calculateTotal(this.products);
  }

  removeProduct(id: any){
    this.cartService.removeFromCart(id);
    this.calculateTotal(this.products);
  }

  incrementCount(id: any){
    this.cartService.incrementCount(id);
  }

  decrementCount(id: any){
    this.cartService.decrementCount(id);
  }

  updateCart(products: any){
    console.log(products);
    this.cartService.saveCart(products);
    this.calculateTotal(products);
  }

  calculateTotal(products: any[]){
    this.totalPrice = 0;
    products.forEach(element=>{
      this.totalPrice += element.price * element.count;
    });
  }

}
