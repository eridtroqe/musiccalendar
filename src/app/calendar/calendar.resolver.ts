import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { empty, EMPTY, of } from 'rxjs';
import { EndpointService } from '../endpoint/endpoint.service';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { getPostsRequest } from '../store/actions/posts.actions';

@Injectable({
    providedIn: 'root'
    })
    export class CalendarResolverService implements Resolve<any> {

      // Used a resolver to render component page when data is ready because mat-calendar renders before the data come 
      // from BE.

      constructor(private endpoint: EndpointService, private store: Store<AppState>) { }
      resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.endpoint.getPosts().pipe(
          catchError((error) => {
          return EMPTY;
          })
        );
      }
    }
