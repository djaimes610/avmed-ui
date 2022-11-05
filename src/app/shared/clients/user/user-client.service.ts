import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserRp, User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserClienService {

 
  baseUrl = "https://avmed.herokuapp.com/";

  constructor(  private http: HttpClient) { }

  validateUser(user: User): Observable<IUserRp> {
    const endpoint = this.baseUrl + "user";


    return this.http.post<IUserRp>(endpoint, user);
  }
}
