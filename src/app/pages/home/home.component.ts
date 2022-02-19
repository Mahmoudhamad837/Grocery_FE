import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  slideConfig = {
    "slidesToShow": 4, 
    "slidesToScroll": 1, 
    autoplay: true, 
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  featuredProducts: any[] = [
    {
      title: 'Crab Pool Security',
      image:'assets/images/product/product-1.jpg',
      price: 30,
      category: 'meat'
    },
    {
      title: 'Crab Pool Security',
      image:'assets/images/product/product-1.jpg',
      price: 30,
      category: 'Oranges'
    }
  ];

  filteredProducts: any[] = [];
  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.filteredProducts = this.featuredProducts;
  }

  filterProducts(filter: string){
    console.log('category', filter)
    this.filteredProducts = this.featuredProducts;
    console.log('feat', this.featuredProducts);
    if(filter == 'all'){
      this.filteredProducts = this.featuredProducts;
      console.log('All products', this.filteredProducts);
    }else{
      this.filteredProducts = this.featuredProducts.filter(function(product){
        return product.category == filter
      });
      console.log('products', this.filteredProducts);
    }
  }

}
