import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClientService } from '../shared/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClientService
  ) { }

  isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  login(data: any){
    return this.http.post('auth/login', data, {});
  }

  signup(data: any){
    return this.http.post('auth/signup', data, {});
  }

  verify(data: any){
    return this.http.post('auth/verify', data, {});
  }
}
