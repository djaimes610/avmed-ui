import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from '../../models/Medicine';


@Injectable({
  providedIn: 'root'
})
export class MedicineClientService {
  baseUrl = "https://avmed.herokuapp.com/";

  constructor(  private http: HttpClient) { }



  findAll(): Observable<Medicine[]> {
    const endpoint = this.baseUrl + "medicines";

    return this.http.get<Medicine[]>(endpoint);
  }

}
