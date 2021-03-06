import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';
import {MatSnackBar} from '@angular/material';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router,
              private toast: MatSnackBar) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // if (this.authService.isLoggedIn()) {
    //   return true;
    // }
    return this.authService.authState$.pipe(
      map(state => {
        if (state !== null) {
          return true;
        }
        this.router.navigate(['/login']);
        this.toast.open('You are not authorized to see this page. Please login in');
        return false;
      })
    );
  }
}
