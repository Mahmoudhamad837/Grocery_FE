import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router) {}
  canActivate(): boolean {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['auth/login']);
      return false;
    }
    return true;
  }
  
}