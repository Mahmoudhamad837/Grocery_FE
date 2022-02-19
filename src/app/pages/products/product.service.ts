import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/shared/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClientService
  ) { }

  getProducts(filter: any){
    return this.http.get('products', filter);
  }

  getProduct(id: any){
    return this.http.get('products/' + id, {});
  }

  reviewProduct(id: any, data: any){
    return this.http.post('products/review/' + id, data, {});
  }

  getCategories(){
    return this.http.get('categories', {});
  }

}
