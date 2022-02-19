import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.scss']
})
export class TopProductsComponent implements OnInit {

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
