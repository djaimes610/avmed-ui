import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PattientClientService } from 'src/app/shared/clients/patient/pattient-client.service';
import { PatientRp } from '../../shared/models/Patient';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  searchValue="";
  patients: PatientRp[] = [];
  loaded: Boolean = false;

  patientIdSelected: string = '';
  patientSelected: PatientRp = new PatientRp('', '','','','','','','','','');


  constructor(    
    private _pattientClientService: PattientClientService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.findAll();
  }

  search(event: any){

    if(this.searchValue) {
      this._pattientClientService.findByCAOrDocument(this.searchValue).subscribe(data => {
        this.patients = data;
      });
    } else {
      this.findAll();
    }
    
  }

  findAll() {
    this._pattientClientService.findAll().subscribe(data => {
      this.patients = data;
      this.loaded = true;
    });
  }


  showDetail(patient: PatientRp, modalHistory: any) {
    this.patientSelected = patient;
    this.modalService.open(modalHistory, { size: 'xl' });

  }

  showHistory(patientId: string, modalDetail: any) {
    this.patientIdSelected = patientId;
    this.modalService.open(modalDetail, { scrollable: true, size: 'xl' });


  }


}
