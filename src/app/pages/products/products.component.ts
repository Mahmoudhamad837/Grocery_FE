import { Component, OnInit } from '@angular/core';
import { NzMarks } from 'ng-zorro-antd/slider';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { map, Observable } from 'rxjs';
import { share, tap } from 'rxjs/operators';
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
  // products: any[] = [];
  categories: any[] = [];
  productsCount: number;
  value2 = [1, 1000];
  marks: NzMarks = {
    1: '1',
    1000: '1000'
  };
  activePage:number = 0;
  pagination: any = {};
  products$: Observable<any>;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.products$ = this.getProducts({page: 1});
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

  getProducts(data: any): Observable<any>{
    return this.productService.getProducts(data).pipe(
      share(),
      tap({
        next: val=>{
          console.log('val', val);
        }
      })
    );
    
    // this.productService.getProducts(data).subscribe(
    //   (res: any) =>{
    //     this.products = res['data'];
    //     this.pagination = res.pagination;
    //     this.products.forEach(ele=>{
    //       ele.title = ele.title.en;
    //     });
    //     this.productsCount = this.products.length;
    //   },
    //   error=>{
    //     console.log(error);
    //   }
    // );
  }

  changeSelect(event: any){
    console.log(event.target.value);
    this.products$ = this.getProducts({category: event.target.value, page: 1});
  }

  displayActivePage(activePageNumber:number){  
    this.activePage = activePageNumber;
    console.log("active:- ---",activePageNumber);
    this.getProducts({page: activePageNumber});
  }

  filterProducts(data: any){
    this.getProducts(data);
  }
}
