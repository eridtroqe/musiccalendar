import { createReducer, Action, on, createFeatureSelector, createSelector } from '@ngrx/store';
import * as postsActions from '../actions/posts.actions';
import { logout } from '../actions/auth.actions';
import { Post } from '../../model/post.interface';

export interface State {
    posts?: Array<Post>;
    post: Post;
    totalPosts: number;
    error: string;
    loading: boolean;
}

export const initialState: State = {
    posts: [],
    post: null,
    totalPosts: 0,
    error: null,
    loading: false
};

const postReducer = createReducer(
    initialState,
    on(postsActions.getPostsSuccess, (state: State, { payload }) => (
        {
            ...state,
            posts: payload.posts,
            totalPosts: payload.maxPosts
        }
    )),
    on(logout, () => initialState),
);

export function reducer(state: State | undefined, action: Action) {
    return postReducer(state, action);
}

const postState = createFeatureSelector<State>(postsActions.featureKey);

export const getposts = createSelector(postState, state => state.posts);
export const getpost = createSelector(postState, state => state.post);
export const isLoadingpost = createSelector(postState, state => state.loading);
export const getTotalposts = createSelector(postState, state => state.totalPosts);