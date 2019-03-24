import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('/users');
  }

  register(user: any) {
    return this.http.post('/users/register', user);
  }

  isUserNameTaken(value: any): Observable<any> {
    console.log('http request');
    const params = new HttpParams({ fromString: 'userName=' + value });
    return this.http.get('/users/userNameTaken', { params: params });
  }
}
