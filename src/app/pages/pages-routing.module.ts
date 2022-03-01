import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: PagesComponent, children:[
    { path:'', redirectTo:'home', pathMatch:'full' },
    { path: 'products', loadChildren: ()=> import('./products/products.module').then(m=> m.ProductsModule) },
    { path: 'orders', loadChildren: ()=> import('./orders/orders.module').then(m=> m.OrdersModule) },
    { path: 'address', loadChildren: ()=> import('./address/address.module').then(m=> m.AddressModule) },
    { path: 'cart', component: CartComponent },
    { path: 'favorite', component: FavoriteComponent },
    { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]  },
  ] },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
