import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentRp } from '../../models/Appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentClientService {
  baseUrl = 'https://avmed.herokuapp.com/';

  constructor(private http: HttpClient) { }


  findByHealthPersonnelId(healthPersonnelId:String): Observable<AppointmentRp[]> {
    const endpoint = this.baseUrl + "appointments/"+healthPersonnelId;

    return this.http.get<AppointmentRp[]>(endpoint);
  }

 
}
