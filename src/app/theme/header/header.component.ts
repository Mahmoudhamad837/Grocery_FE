import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { CartService } from 'src/app/pages/cart/cart.service';
import { FavoriteService } from 'src/app/pages/favorite/favorite.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartCount: number;
  favoriteCount: number;
  isLogged: boolean = false;
  constructor(
    private cartService: CartService,
    private favoriteService: FavoriteService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cartService.cartCount.subscribe(
      res=>{
        this.cartCount = res;
      }
    );

    this.favoriteService.favoriteCount.subscribe(
      res=>{
        this.favoriteCount = res;
      }
    );

    this.authService.isLogged.subscribe(
      res=>{
        this.isLogged = res;
      }
    );
    if(localStorage.getItem('token')){
      this.isLogged = true;
    }
  }

  logout(){
    localStorage.removeItem('token');
    this.authService.isLogged.next(false);
  }

  gotoPage(page: any){
    this.router.navigate([page]);
  }

}
