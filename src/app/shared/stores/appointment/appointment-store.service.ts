import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAppointmentInfo } from '../../models/Appointment';
import { AppStoreService } from '../app/app-store.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentStoreService {
  private readonly APPOINTMENT_INFO = 'appointmentInfo';
  private appointmentInfo!: IAppointmentInfo;
  private isAppointmentSubject = new BehaviorSubject<IAppointmentInfo>(this.appointmentInfo);
  public isAppointment$ = this.isAppointmentSubject.asObservable();


  constructor( private _appStore: AppStoreService) {
    this.isAppointment$.subscribe(appointmentInfo => this.appointmentInfo = appointmentInfo);

   }

  public get appointmentInfoStore(): string {
    const { APPOINTMENT_INFO } = this;
    return this._appStore.getData(APPOINTMENT_INFO);
  }

  public set appointmentInfoStore(Appointment: string) {
    const { APPOINTMENT_INFO } = this;
    this._appStore.saveData(APPOINTMENT_INFO, Appointment);
  }

  public removeAppointmentInfoStore(): void {
    const { APPOINTMENT_INFO } = this;
    this._appStore.removeStorageItem(APPOINTMENT_INFO);
  }

  public get AppointmentInfo$(): Observable<IAppointmentInfo> {
    return this.isAppointmentSubject.asObservable();
  }



}
