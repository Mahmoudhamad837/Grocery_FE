import { Component, OnInit } from '@angular/core';
import { NzMarks } from 'ng-zorro-antd/slider';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  displayClass:string='col-lg-4 col-md-6 col-sm-6'
  products: any[] = [];
  categories: any[] = [];
  productsCount: number;
  value2 = [1, 1000];
  marks: NzMarks = {
    1: '1',
    1000: '1000'
  };
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getCategories(){
    this.productService.getCategories().subscribe(
      (res: any)=>{
        this.categories = res;
      }
    );
  }
  setOneColumn(clumnClass:any){
    this.displayClass=clumnClass
    
  }

  getProducts(){
    this.productService.getProducts({}).subscribe(
      (res: any) =>{
        this.products = res.data;
        this.products.forEach(ele=>{
          ele.title = ele.title.en;
        });
        this.productsCount = this.products.length;
      }
    );
  }
}
