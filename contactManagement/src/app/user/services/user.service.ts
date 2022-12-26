import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userID = new BehaviorSubject(null as any);
  private baseURL = 'http://localhost:3000';
  constructor(private _http: HttpClient) {}

  getAllUsers(): Observable<any> {
    let updateURL = `${this.baseURL}/users`;
    return this._http.get<any>(updateURL).pipe();
  }

  getUserById(id: any): Observable<any> {
    let updateURL = `${this.baseURL}/users/${id}`;
    return this._http.get<any>(updateURL).pipe();
  }

  deleteUserById(id: any): Observable<any> {
    let updateURL: string = `${this.baseURL}/users/${id}`;
    return this._http.delete(updateURL).pipe();
  }

  editUserData(userData: any, id: any): Observable<any>{
    let updateURL: string = `${this.baseURL}/users/${id}`
    return this._http.put<any>(updateURL, userData).pipe();
  }
}
