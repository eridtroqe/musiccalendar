import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { EndpointService } from '../../endpoint/endpoint.service';
import { map, catchError, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { getPostsRequest, getPostsSuccess, getPostsFailure, deletePostRequest, deletePostSuccess, deletePostFailure } from '../actions/posts.actions';


@Injectable()
export class PostsEffects {

    constructor(private actions$: Actions,
                private store: Store<AppState>,
                private postService: EndpointService) { }




    GetPostsRequest$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getPostsRequest),
            mergeMap((action) =>
                this.postService.getPosts().pipe(
                    map(data => {
                        return getPostsSuccess({ payload: data })
                    }
                    ),
                    catchError(error => of(getPostsFailure({ error }))))
            ),
        );
    });



    DeletePropertyRequest$ = createEffect(() => {
        return this.actions$.pipe(
                ofType(deletePostRequest),
                map(action => action.id),
                mergeMap(([id]) =>
                    this.postService.deletePost(id).pipe(
                        switchMap(() => [deletePostSuccess(),
                                          getPostsRequest()
                                          ]),
                        catchError(error => of(deletePostFailure({error}))))
                    ),
        );
    });

}