import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PattientClientService } from 'src/app/shared/clients/patient/pattient-client.service';
import { PatientRq } from '../../shared/models/Patient';


@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']

})
export class NewPatientComponent implements OnInit {

  Sex: any = ['Femenino', 'Masculino'];
  patientModel = this.getNewPatientRq();
  showSuccessAlert: boolean = false;

  showErrorAlert: boolean = false;
  errorMessage: String = '';
  
  constructor( 
    private _router: Router,
    private _pattientClientService: PattientClientService
    ) {
    
   }

  ngOnInit(): void {
  }

  save(form: NgForm){
    this._pattientClientService.save(this.patientModel).subscribe(result => {
      if(result.code == '1') {
        this.showSuccessAlert = true;
        setTimeout(() => {
          this.resetForm(form);
          this.showSuccessAlert = false;
        }, 1500);
      } else {
        this.showErrorAlert = true;
        this.errorMessage = result.description;
        setTimeout(() => {
          this.showErrorAlert = false;
        }, 2000);
      }
    })
    ;
  }

  cancel() {
    this._router.navigateByUrl("")  
  }
  
  getNewPatientRq() {
    return new PatientRq('', '', '', '', '', '', '', '');
  }

  resetForm(form: NgForm) {
    form.resetForm();
  }
  

}
