import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserStoreService } from 'src/app/shared/stores/user/user-store.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( 
    private _router: Router,
    private _userStoreService: UserStoreService,
    ) { }

  ngOnInit(): void {
  }

  
  goPatientList()
  {
    this._router.navigateByUrl("listado-pacientes")  
  }

  goAttentionList()
  {
    this._router.navigateByUrl("lista-atenciones")  
  }

  goAppointmentList()
  {
    this._router.navigateByUrl("listado-pacientes")  
  }

  goNewAttention()
  {
    this._router.navigateByUrl("registro-atencion")  
  }

  goNewPatient()
  {
    this._router.navigateByUrl("registro-paciente")  
  }
  goAppointment() {
    this._router.navigateByUrl("citas")  

  }

  logout(){
    this._userStoreService.removeUserInfoStore();
    this._router.navigateByUrl("login")  
  }

}
