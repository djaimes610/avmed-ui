import { Component, Input, OnInit } from '@angular/core';
import { AttentionRp, HealthPersonnelRp, TriageRp } from 'src/app/shared/models/Attention';
import { PatientRp } from 'src/app/shared/models/Patient';
import { NgxPrintElementService } from 'ngx-print-element';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {


  @Input('attention') attentionSelected: AttentionRp = new AttentionRp('','','',this.getNewTriage(),[],[],'',this.getNewPatient(),this.getNewHealthPersonnel(),'');

  constructor(public print: NgxPrintElementService) { }



  ngOnInit(): void {
  }

  getDiagnosis(diagnosisId: String){
    const diagnosis = this.attentionSelected.diagnoses.filter(diagnosis => diagnosis.id == diagnosisId)[0];
    return  diagnosis != null ? diagnosis.code + ' - ' + diagnosis.name : '';
  }


  getNewTriage() {
    return new TriageRp('', '', '','','', '');
  }
  getNewPatient() {
    return new PatientRp('', '', '','','', '', '', '','','');

  }
  getNewHealthPersonnel() {
    return new HealthPersonnelRp('', '', '','','', '','');

  }


}
