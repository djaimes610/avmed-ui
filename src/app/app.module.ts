import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './business/home/home.component';
import { PatientsComponent } from './business/patients/patients.component';
import { NewAttentionComponent } from './business/new-attention/new-attention.component';
import { NewPatientComponent } from './business/new-patient/new-patient.component';
import { AttentionsComponent } from './business/attentions/attentions.component';
import { AppointmentsComponent } from './business/appointments/appointments.component';
import { HttpClientModule } from '@angular/common/http';
import { PattientClientService } from './shared/clients/patient/pattient-client.service';
import { DiagnosisClientService } from './shared/clients/diagnosis/diagnosis-client.service';
import { AppointmentClientService } from './shared/clients/appointment/appointment-client.service';
import { AttentionClientService } from './shared/clients/attention/attention-client.service';
import { MedicineClientService } from './shared/clients/medicine/medicine-client.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './business/login/login.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { HeaderComponent } from './core/header/header.component';
import { FormsModule } from '@angular/forms';
import { StoreFactoryModule } from './shared/stores/store-factory.module';
import { UserClienService } from './shared/clients/user/user-client.service';
import { ReportClientService } from './shared/clients/report/report-client.service';
import { PatientHistoryComponent } from './business/patient-history/patient-history.component';
import { PatientDetailComponent } from './business/patient-detail/patient-detail.component';
import { AttentionDetailComponent } from './business/attention-detail/attention-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PatientsComponent,
    NewAttentionComponent,
    NewPatientComponent,
    AttentionsComponent,
    AppointmentsComponent,
    LoginComponent,
    SidebarComponent,
    PatientHistoryComponent,
    PatientDetailComponent,
    AttentionDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    NgbModule,
    StoreFactoryModule.forRoot()

  ],
  providers: [
    PattientClientService,
    DiagnosisClientService,
    MedicineClientService,
    AttentionClientService,
    AppointmentClientService,
    UserClienService,
    ReportClientService
  ],
  bootstrap: [
    AppComponent,
    
  ]
})
export class AppModule { }
