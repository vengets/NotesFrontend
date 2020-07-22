import { Injectable } from '@angular/core';
import {User} from './model/user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {}

  async login(user: User): Promise<boolean> {
    const url = 'http://localhost:8085/login';
    const jwt = await this.httpClient.post<{token: string, status: string}>(url, {
      id: user.id,
      password: user.password
    }).toPromise();
    if (jwt && jwt.status === 'success') {
      localStorage.setItem('user', user.id);
      localStorage.setItem('token', jwt.token);
      return true;
    }
    return false;
  }
}
