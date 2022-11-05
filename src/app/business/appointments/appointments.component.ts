import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentClientService } from 'src/app/shared/clients/appointment/appointment-client.service';
import { AppointmentRp, IAppointmentInfo } from 'src/app/shared/models/Appointment';
import { IUserInfo } from 'src/app/shared/models/User';
import { AppointmentStoreService } from 'src/app/shared/stores/appointment/appointment-store.service';
import { UserStoreService } from 'src/app/shared/stores/user/user-store.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  appointments: AppointmentRp[] = [];
  loaded: Boolean = false;

  userInfo?: IUserInfo;

  constructor(
    private _appointmentClientService: AppointmentClientService,
    private _userStoreService: UserStoreService,
    private _appointmentStoreService: AppointmentStoreService,
    private _router: Router
    ) { 

    this.userInfo = JSON.parse(this._userStoreService.userInfoStore) as IUserInfo;

  }

  ngOnInit(): void {

    this._appointmentClientService.findByHealthPersonnelId(this.userInfo?.healthPersonnelId || '').subscribe(data => {
      this.appointments = data;
      this.loaded = true
    });
  }

  goAttention(appointment: AppointmentRp) {
    const appointmentInfo: IAppointmentInfo = {
      id: appointment.id,
      patient: appointment.patient
    }
    this._appointmentStoreService.appointmentInfoStore = JSON.stringify(appointmentInfo);
    this._router.navigateByUrl("registro-atencion") ;
  }

}
