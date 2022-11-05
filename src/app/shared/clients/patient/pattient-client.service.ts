import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { IPatient, PatientRq, PatientRp, IPatientRp } from 'src/app/shared/models/Patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PattientClientService {

  baseUrl = "http://localhost:9065/";

  constructor(  private http: HttpClient) { }

  save(patient: PatientRq) {
    const endpoint = this.baseUrl + "register-patient";

    return this.http.post<IPatientRp>(endpoint, patient);
  }

  findAll(): Observable<PatientRp[]> {
    const endpoint = this.baseUrl + "patients";

    return this.http.get<PatientRp[]>(endpoint);
  }

  findByCAOrDocument(searchValue:String): Observable<PatientRp[]> {
    const endpoint = this.baseUrl + "patients"+`?documentNumber=${searchValue}&insuredCode=${searchValue}`

    return this.http.get<PatientRp[]>(endpoint);
  }

  findByInsureCode(insuredCode:String): Observable<PatientRp[]> {
    const endpoint = this.baseUrl + "patients"+`?insuredCode=${insuredCode}`

    return this.http.get<PatientRp[]>(endpoint);
  }
  
  findByDocumentNumber(documentNumber:String): Observable<PatientRp[]> {
    const endpoint = this.baseUrl + "patients"+`?documentNumber=${documentNumber}`

    return this.http.get<PatientRp[]>(endpoint);
  }

  getTotalPatients(): Observable<Number> {
    const endpoint = this.baseUrl + "patients/total";
    return this.http.get<Number>(endpoint);
  }



}
