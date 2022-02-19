import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrls: ['./latest-products.component.scss']
})
export class LatestProductsComponent implements OnInit {

  slideConfig1 = {
    "slidesToShow": 1, 
    "slidesToScroll": 1, 
    autoplay: true, 
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
