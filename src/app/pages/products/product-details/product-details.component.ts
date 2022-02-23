import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../../cart/cart.service';
import { PagesService } from '../../pages.service';
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
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [ '<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right></i>"' ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 4
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };

  slidesStore: any[] = [];
  mainImage: string = '';
  reviewForm: FormGroup;
  id: any;
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService,
    private pagesService: PagesService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.route.params.subscribe(
      res=>{
        this.id = res['id'];
        this.getProduct(res['id']);
      }
    );
    this.slidesStore = [
      "assets/images/product/details/thumb-1.jpg",
      "assets/images/product/details/thumb-2.jpg",
      "assets/images/product/details/thumb-3.jpg",
      "assets/images/product/details/thumb-4.jpg"
    ];
  }

  getProduct(id :any){
    this.productService.getProduct(id).subscribe(
      (res :any)=>{
        this.product = res['product'];
        this.reviewForm.patchValue({product: this.product._id});
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

  changeMain(event: any){
    console.log(event);
    this.mainImage = event;
  }

  initForm(){
    this.reviewForm = new FormGroup({
      rating: new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
      title: new FormControl('', [Validators.required]),
      review: new FormControl('', [Validators.required]),
      publicName: new FormControl('', [Validators.required]),
      product: new FormControl('', [Validators.required])
    });
  }

  onSubmit(){
    console.log(this.reviewForm.value);
    this.pagesService.reviewProduct(this.reviewForm.value).subscribe(
      res=>{
        this.getProduct(this.id);
      },
      error=>{
        console.log(error);
      }
    );
  }
}
