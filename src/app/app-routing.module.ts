import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './business/appointments/appointments.component';
import { AttentionsComponent } from './business/attentions/attentions.component';
import { HomeComponent } from './business/home/home.component';
import { LoginComponent } from './business/login/login.component';
import { NewAttentionComponent } from './business/new-attention/new-attention.component';
import { NewPatientComponent } from './business/new-patient/new-patient.component';
import { PatientsComponent } from './business/patients/patients.component';
import { AppGuard } from './shared/guards/app.guard';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {canActivate: [AppGuard], path:'', component:HomeComponent},
  {canActivate: [AppGuard], path:'listado-pacientes', component:PatientsComponent},
  {canActivate: [AppGuard], path:'lista-atenciones', component:AttentionsComponent},
  {canActivate: [AppGuard], path:'registro-paciente', component:NewPatientComponent},
  {canActivate: [AppGuard], path:'registro-atencion', component:NewAttentionComponent},
  {canActivate: [AppGuard], path:'citas', component:AppointmentsComponent},
  ];

  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
