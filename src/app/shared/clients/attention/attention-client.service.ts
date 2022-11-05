import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AttentionRp, AttentionRq } from '../../models/Attention';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttentionClientService {

  baseUrl = 'http://localhost:9065/';

  constructor(private http: HttpClient) { }

  save(attention: AttentionRq) {
    const endpoint = this.baseUrl + 'register-attention';

    return this.http.post<AttentionRp>(endpoint, attention);
  }

  findByHealthPersonnelId(healthPersonnelId:String): Observable<AttentionRp[]> {
    const endpoint = this.baseUrl + "attentions/healthPersonnel/"+healthPersonnelId;

    return this.http.get<AttentionRp[]>(endpoint);
  }

  findByPatientId(patientId:String): Observable<AttentionRp[]> {
    const endpoint = this.baseUrl + "attentions/patient/"+patientId;

    return this.http.get<AttentionRp[]>(endpoint);
  }

  getTotalAttentions(): Observable<Number> {
    const endpoint = this.baseUrl + "attentions/total";
    return this.http.get<Number>(endpoint);
  }

}
