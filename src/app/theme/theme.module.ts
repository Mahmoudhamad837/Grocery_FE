import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { BannerComponent } from './banner/banner.component';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { LatestProductsComponent } from './latest-products/latest-products.component';
import { TopProductsComponent } from './top-products/top-products.component';
import { ReviewProductsComponent } from './review-products/review-products.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NotificationsComponent } from './notifications/notifications.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    BannerComponent,
    ProductCardComponent,
    LatestProductsComponent,
    TopProductsComponent,
    ReviewProductsComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SlickCarouselModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    BannerComponent,
    ProductCardComponent,
    LatestProductsComponent,
    TopProductsComponent,
    ReviewProductsComponent,
    NotificationsComponent
  ]
})
export class ThemeModule { }
