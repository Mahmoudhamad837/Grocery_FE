import { Injectable } from '@angular/core';
import { HttpClientService } from '../shared/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(
    private http: HttpClientService
  ) { }

  getProfile(){
    return this.http.get('auth/me', {});
  }

  updateProfile(data: any, id: any){
    return this.http.put('users/' + id, data, {});
  }

  getUserOrders(){
    return this.http.get('orders/user/orders', {});
  }

  getOrderDetails(id: any){
    return this.http.get('orders/' + id, {});
  }

  getUserAddresses(){
    return this.http.get('addresses', {});
  }

  getAddress(id: any){
    return this.http.get('addresses/' + id, {});
  }

  addAddress(data: any){
    return this.http.post('addresses', data, {});
  }

  updateAddress(data: any, id: any){
    return this.http.put('addresses/' + id, data, {});
  }

  deleteAddress(id:any){
    return this.http.delete('addresses/' + id, {});
  }
}
