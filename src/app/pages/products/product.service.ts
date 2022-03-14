import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { HttpClientService } from 'src/app/shared/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClientService
  ) { }

  getProducts(filter: any): Observable<any>{
    return this.http.get('products', filter)
    .pipe(
      shareReplay()
    );
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
