import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
  } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getIsAuth } from './store/reducers/auth.reducer';
import { AppState } from './store/app.state';
import { EndpointService } from './endpoint/endpoint.service';


@Injectable()
  export class AuthGuard implements CanActivate {
    isAuthStore: boolean;
    constructor(private authService: EndpointService,
                private router: Router,
                private store: Store<AppState>) {}

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
      const isAuth = this.authService.getToken();
      this.store.select(getIsAuth).subscribe(val => this.isAuthStore = val);
      if (!isAuth) {
        this.router.navigate(['']);
        return false;
      }
      if (isAuth && this.isAuthStore === true) {
        return true;
      }
    }
  }
