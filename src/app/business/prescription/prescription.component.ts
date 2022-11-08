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
  public config = {
    printMode: 'template-popup',
    popupProperties: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes',
    pageTitle: 'Hello World',
    templateString: '<header>I\'m part of the template header</header>{{printBody}}<footer>I\'m part of the template footer</footer>',
    stylesheets: [{ rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' }],
    styles: ['td { border: 1px solid black; color: green; }', 'table { border: 1px solid black; color: red }', 'header, table, footer { margin: auto; text-align: center; }']
  }

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
