import { Action, createAction, createFeatureSelector, createReducer, createSelector, on, props } from '@ngrx/store';
import { Post, PostsResponse } from '../../model/post.interface';


export const featureKey = 'posts';


export const deletePostRequest = createAction(`[${featureKey}] deletePostRequest`, props<{ id: string}>());
export const deletePostSuccess = createAction(`[${featureKey}] deletePostSuccess`);
export const deletePostFailure = createAction(`[${featureKey}] deletePostFailure`, props<{ error: string }>());

export const getPostsRequest = createAction(`[${featureKey}] getPostsRequest`);
export const getPostsSuccess = createAction(`[${featureKey}] getPostsSuccess`, props<{ payload: PostsResponse }>());
export const getPostsFailure = createAction(`[${featureKey}] getPostsFailure`, props<{ error: string }>());
