import { Component, Input, OnInit } from '@angular/core';
import { AttentionClientService } from 'src/app/shared/clients/attention/attention-client.service';
import { AttentionRp, HealthPersonnelRp, TriageRp } from 'src/app/shared/models/Attention';
import { PatientRp } from 'src/app/shared/models/Patient';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent implements OnInit {
  @Input('patientId') patientId: string = '';

  attentions: AttentionRp[] = [];
  attentionSelected: AttentionRp = new AttentionRp('','','',this.getNewTriage(),[],[],'',this.getNewPatient(),this.getNewHealthPersonnel(),'');

  loaded: Boolean = false;

  constructor(
    private _attentionClientService: AttentionClientService
    ) {
      
     }

  ngOnInit(): void {
    
    this._attentionClientService.findByPatientId(this.patientId).subscribe(data => {
      this.attentions = data;
      this.loaded = true;
      if(this.attentions.length) {
        this.attentionSelected = this.attentions[0]
      }
    });

    
  }

  getDiagnosis(diagnosisId: String){
    const diagnosis = this.attentionSelected.diagnoses.filter(diagnosis => diagnosis.id == diagnosisId)[0];
    return  diagnosis != null ? diagnosis.code + ' - ' + diagnosis.name : '';
  }

  getAttentionSelected(attention: AttentionRp) {
    console.log(attention);
    
    this.attentionSelected = attention;
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
