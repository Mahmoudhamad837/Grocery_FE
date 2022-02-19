import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-products',
  templateUrl: './review-products.component.html',
  styleUrls: ['./review-products.component.scss']
})
export class ReviewProductsComponent implements OnInit {

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
