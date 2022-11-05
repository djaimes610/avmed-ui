import { Component, Input, OnInit } from '@angular/core';
import { PatientRq } from 'src/app/shared/models/Patient';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
  @Input('patient') patientModel = new PatientRq('', '', '', '', '', '', '', '');
  Sex: any = ['Femenino', 'Masculino'];

  constructor() { }

  ngOnInit(): void {
  }

}
