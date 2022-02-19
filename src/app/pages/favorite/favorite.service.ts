import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  products:any[] = [];
  favoriteCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor() { 
    this.getFavoriteItems();
  }

  addToFavorite(product: any){
    this.products.push(product);
    localStorage.setItem('favorite', JSON.stringify(this.products));
    this.favoriteCount.next(this.products.length);
  }

  removeFromFavorite(id: any){
    const index = this.products.findIndex(
      product=> product._id == id
    );

    this.products.splice(index, 1);
    this.favoriteCount.next(this.products.length);
    localStorage.setItem('favorite', JSON.stringify(this.products));
  }

  getFavoriteItems(){
    this.products = JSON.parse(localStorage.getItem('favorite') || '[]');
    this.favoriteCount.next(this.products.length);
    return this.products;
  }
}
