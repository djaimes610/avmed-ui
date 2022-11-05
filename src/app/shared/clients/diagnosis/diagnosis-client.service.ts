import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Diagnosis } from '../../models/Diagnosis';


@Injectable({
  providedIn: 'root'
})
export class DiagnosisClientService {
  baseUrl = "https://avmed.herokuapp.com/";

  constructor(  private http: HttpClient) { }



  findAll(): Observable<Diagnosis[]> {
    const endpoint = this.baseUrl + "diagnoses";

    return this.http.get<Diagnosis[]>(endpoint);
  }

 

}
