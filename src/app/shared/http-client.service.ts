import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  get(url: any, queryParams: any) {
    return this.httpClient.get(`${environment.base_url}/${url}`, {
      params: queryParams
    });
  }

  post(url: any, body: any, queryParams: any) {
    return this.httpClient.post(`${environment.base_url}/${url}`, body, {
      params: queryParams
    });
  }

  put(url: any, body: any, queryParams: any) {
    return this.httpClient.put(`${environment.base_url}/${url}`, body, {
      params: queryParams
    })
  }

  patch(url: any, body: any, queryParams: any) {
    return this.httpClient.patch(`${environment.base_url}/${url}`, body, {
      params: queryParams
    })
  }

  delete(url: any, queryParams: any) {
    return this.httpClient.delete(`${environment.base_url}/${url}`, {
      params: queryParams
    });
  }

}
