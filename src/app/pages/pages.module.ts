import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ThemeModule } from '../theme/theme.module';
import { SharedModule } from '../shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FavoriteComponent } from './favorite/favorite.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersModule } from './orders/orders.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NgPaymentCardModule } from 'ng-payment-card';
import { NgxStripeModule } from 'ngx-stripe';
import { AddressModule } from './address/address.module';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PolicyComponent } from './policy/policy.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    CartComponent,
    ContactUsComponent,
    HomeComponent,
    FavoriteComponent,
    ProfileComponent,
    NotFoundComponent,
    CheckoutComponent,
    AboutusComponent,
    PolicyComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule,
    SharedModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    OrdersModule,
    AddressModule,
    NgPaymentCardModule,
    NzRadioModule,
    NzModalModule,
    NgxStripeModule.forRoot('pk_test_51KKkUVHYxjanX8wZw0PQ6JiMZ5xIpL3HWDOjyr6ghwhhB26aJFImT49huY9K83eXRlm4tliQOdvMpX9e41L9H17b00gNVpRz5z'),
  ]
})
export class PagesModule { }
