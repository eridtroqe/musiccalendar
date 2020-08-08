import { User } from '../model/user.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PostsResponse, Post } from '../model/post.interface';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor(private http: HttpClient) { }

  getToken() {
    return localStorage.getItem('token');
  }

  login(email: string, password: string) {
    const authData: User = { email, password };
    return this.http
      .post<{ token: string; expiresIn: number; email: string }>(
        BACKEND_URL + '/user/login',
        authData
      );
  }

  getPosts(): Observable<PostsResponse> {
    return this.http.get<PostsResponse>(BACKEND_URL + '/posts');
  }

  deletePost(id: string): Observable<void> {
    return this.http.delete<void>(BACKEND_URL + '/posts/' + id);
  }

  updateOrderPost(posts: Array<Post>): Observable<any> {
  return  this.http.put<any>(BACKEND_URL + '/posts/update', { posts });
  }

}
