import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from '../../models/Report';

@Injectable({
  providedIn: 'root'
})
export class ReportClientService {
  
  baseUrl = "https://avmed.herokuapp.com/";

  constructor(  private http: HttpClient) { }


  getReport(): Observable<Report> {
    const endpoint = this.baseUrl + "report";
    return this.http.get<Report>(endpoint);
  }
}
