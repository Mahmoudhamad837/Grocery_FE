import { Component, OnInit } from '@angular/core';
import { FavoriteService } from './favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  products: any[] = [];
  constructor(
    private favoriteService: FavoriteService
  ) { }

  ngOnInit(): void {
    this.getFavoriteProducts();
  }

  getFavoriteProducts(){
    this.products = this.favoriteService.getFavoriteItems();
  }

  removeFromFavorite(id: any){
    this.favoriteService.removeFromFavorite(id);
  }
}
