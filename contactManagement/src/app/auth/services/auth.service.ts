import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseURL = 'http://localhost:3000';
  private userID = new BehaviorSubject<string>(null as any);
  userDataValue = new BehaviorSubject<any>(0);

  currntUserID = this.userID.asObservable();
  constructor(private _http: HttpClient) {}

  loginUser(userData: any): Observable<any> {
    let updateURL = `${this.baseURL}/login`;
    return this._http.post<any>(updateURL, userData);
  }

  registerUser(userData: any): Observable<any> {
    let updateURL = `${this.baseURL}/register`;
    return this._http.post<any>(updateURL, userData).pipe();
  }

  saveToken(token: string, value: string) {
    localStorage.setItem(token, value);
  }

  getTokenByName(token: string) {
    return localStorage.getItem(token);
  }

  removeToken(token: string) {
    localStorage.removeItem(token);
  }
}
