import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/pages/cart/cart.service';
import { FavoriteService } from 'src/app/pages/favorite/favorite.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() productData: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService,
    private favoriteService: FavoriteService
  ) { }

  ngOnInit(): void {

  }

  navigateProduct(id: any){
    this.router.navigate(['product-details', id], {relativeTo: this.route});
  }

  addToCart(product: any){
    this.cartService.addToCart(product, 1);
  }

  addToFavorite(product: any){
    this.favoriteService.addToFavorite(product);
  }

}
