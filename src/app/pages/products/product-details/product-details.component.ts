import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../cart/cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: any;
  quantity: any = 1;
  relatedProducts: any[] = [];
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      res=>{
        this.getProduct(res['id']);
      }
    )
  }

  getProduct(id :any){
    this.productService.getProduct(id).subscribe(
      (res :any)=>{
        this.product = res['product'];
        this.relatedProducts = res['relatedProducts'];
        this.relatedProducts.forEach(ele=>{
          ele.title = ele.title.en;
        });
      }
    );
  }

  addToCart(product: any, quantity: any){
    this.cartService.addToCart(product, quantity);
  }

}
