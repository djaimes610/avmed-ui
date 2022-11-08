import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AttentionClientService } from 'src/app/shared/clients/attention/attention-client.service';
import { AttentionRp, HealthPersonnelRp, Triage, TriageRp } from 'src/app/shared/models/Attention';
import { PatientRp } from 'src/app/shared/models/Patient';
import { IUserInfo } from 'src/app/shared/models/User';
import { UserStoreService } from 'src/app/shared/stores/user/user-store.service';

@Component({
  selector: 'app-attentions',
  templateUrl: './attentions.component.html',
  styleUrls: ['./attentions.component.css']
})
export class AttentionsComponent implements OnInit {
  attentions: AttentionRp[] = [];
  attentionSelected: AttentionRp = new AttentionRp('','','',this.getNewTriage(),[],[],'',this.getNewPatient(),this.getNewHealthPersonnel(),'');
  
  loaded: Boolean = false;

  userInfo?: IUserInfo;

  constructor(
    private _attentionClientService: AttentionClientService,
    private modalService: NgbModal,
    private _userStoreService: UserStoreService,) {

      this.userInfo = JSON.parse(this._userStoreService.userInfoStore) as IUserInfo;
  }

  
  ngOnInit(): void {
    
   this.findAll();
  }
  
  findAll() {
    this._attentionClientService.findByHealthPersonnelId(this.userInfo?.healthPersonnelId || '').subscribe(data => {
      this.attentions = data;
      this.loaded = true
    });
  }

  showDetail(attention: AttentionRp, modalDetail: any) {
    this.attentionSelected = attention;
    this.modalService.open(modalDetail, { size: 'xl' });

  }
  
  showPrescription(attention: AttentionRp, modalDetail: any) {
    this.attentionSelected = attention;
    this.modalService.open(modalDetail, { size: 'xl' });

  }

  getDiagnosis(diagnosisId: String){
    const diagnosis = this.attentionSelected.diagnoses.filter(diagnosis => diagnosis.id == diagnosisId)[0];
    return  diagnosis != null ? diagnosis.code + ' ' + diagnosis.name : '';
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
