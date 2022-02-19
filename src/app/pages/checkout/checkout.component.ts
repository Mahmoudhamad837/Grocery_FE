import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';
import { StripeCardComponent, StripeService } from 'ngx-stripe';
import { MenuItem } from 'primeng/api';
import { CartService } from '../cart/cart.service';

export enum PageName {
  AddressPage,
  PaymentPage,
  SummaryPage
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  items: MenuItem[];
  PageName = PageName;
  index = PageName.AddressPage;

  @ViewChild(StripeCardComponent) card: StripeCardComponent;

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'en'
  };

  stripeTest: FormGroup;
  products: any[] = [];
  totalPrice: any = 0;
  constructor(
    private fb: FormBuilder, 
    private stripeService: StripeService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.items = [{
      label: 'Address',
    },
    {
      label: 'Payment',
    },
    {
      label: 'Items',
    }
    ];
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
    this.getCartProducts();
  }

  createToken(): void {
    const name = this.stripeTest.get('name')?.value;
    this.stripeService
      .createToken(this.card.element, { name })
      .subscribe((result) => {
        if (result.token) {
          // Use the token
          console.log(result);
          console.log(result.token.id);
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }

  getCartProducts(){
    this.products = this.cartService.getCartItems();
    this.calculateTotal(this.products);
  }

  calculateTotal(products: any[]){
    this.totalPrice = 0;
    products.forEach(element=>{
      this.totalPrice += element.price * element.count;
    });
  }

}
