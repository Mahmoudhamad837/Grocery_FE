import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

const AUTH_URLS = [
  "addresses", "orders", "users", "auth/me", "reviews", "products/review", "api/notifications"
];

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  
    constructor(
        private router: Router
    ) {} 
   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
      const token = localStorage.getItem('token');
      AUTH_URLS.forEach(ele=>{
        if(request.url.match(ele)){
          if (token) {
            // If we have a token, we set it to the header
            let headers = request.headers.set("Authorization", 'Bearer ' + localStorage.getItem('token'))
            request = request.clone({
               headers
            });
         }
        }
      })
     
  
    return next.handle(request).pipe(
      retry(1),
        catchError((err) => {
          if (err instanceof HttpErrorResponse) {
              if (err.status === 401) {
              // redirect user to the logout page
              this.router.navigate(['auth/login']);
           }else {
            const error = err.error.error || err.statusText;
            return throwError(error);
         }
        }
        return throwError(err);
      })
     )
    }
  }