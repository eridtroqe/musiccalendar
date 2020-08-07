import { User } from '../model/user.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor(private http: HttpClient) { }


login(email: string, password: string) {
    const authData: User = { email, password };
    return this.http
      .post<{ token: string; expiresIn: number; email: string }>(
        BACKEND_URL + '/user/login',
        authData
      );
  }

}
