import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { empty, EMPTY } from 'rxjs';
import { EndpointService } from '../endpoint/endpoint.service';

@Injectable({
    providedIn: 'root'
    })
    export class CalendarResolverService implements Resolve<any> {
      constructor(private endpoint: EndpointService) { }
      resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.endpoint.getPosts().pipe(
          catchError((error) => {
          return EMPTY;
          })
        );
      }
    }