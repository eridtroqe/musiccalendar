import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointService } from '../../endpoint/endpoint.service';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { loginRequest, loginSuccess, loginFailure, logout } from '../actions/auth.actions';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions,
                private router: Router,
                private auth: EndpointService){}

 LoginRequest$ = createEffect(() => {
     return this.actions$.pipe(
             ofType(loginRequest),
             map(action => action.payload),
             mergeMap((data) =>
                 this.auth.login(data.email, data.password).pipe(
                     map(res => loginSuccess({token: res.token, email: res.email })),
                     catchError(error => of(loginFailure({ error }))))
                 ),
     );
 });

 LoginSuccess$ = createEffect(() => {
     return this.actions$.pipe(
             ofType(loginSuccess),
             tap((user) => {
                 localStorage.setItem('token', user.token);
                 localStorage.setItem('user_email', user.email);
                 this.router.navigate(['calendar']);
                }));
 }, {dispatch: false});


 Logout$ = createEffect(() => {
     return this.actions$.pipe(
             ofType(logout),
             tap(() => {
                 localStorage.removeItem('token');
                 this.router.navigate(['']);
             }));
 }, {dispatch: false});

}