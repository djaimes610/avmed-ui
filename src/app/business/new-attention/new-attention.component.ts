import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AttentionClientService } from 'src/app/shared/clients/attention/attention-client.service';
import { DiagnosisClientService } from 'src/app/shared/clients/diagnosis/diagnosis-client.service';
import { MedicineClientService } from 'src/app/shared/clients/medicine/medicine-client.service';
import { PattientClientService } from 'src/app/shared/clients/patient/pattient-client.service';
import { IAppointmentInfo } from 'src/app/shared/models/Appointment';
import { AttentionForm, AttentionRq, IAttentionRq, Treatment, TreatmentForm, Triage } from 'src/app/shared/models/Attention';
import { Diagnosis } from 'src/app/shared/models/Diagnosis';
import { Medicine } from 'src/app/shared/models/Medicine';
import { PatientRp, PatientRq } from 'src/app/shared/models/Patient';
import { IUserInfo } from 'src/app/shared/models/User';
import { AppointmentStoreService } from 'src/app/shared/stores/appointment/appointment-store.service';
import { UserStoreService } from 'src/app/shared/stores/user/user-store.service';



@Component({
  selector: 'app-new-attention',
  templateUrl: './new-attention.component.html',
  styleUrls: ['./new-attention.component.css']
})
export class NewAttentionComponent implements OnInit {

  attentionFormModel: AttentionForm = this.getNewAttentionForm();
  patientModel = this.getNewPatientModel();
  Sex: any = ['Femenino', 'Masculino'];

  diagnoses: Diagnosis[] = [];
  medicines: Medicine[] = [];

  frequencyTypes: String[] = ['Horas', 'Días'];
  durationTypes: String[] = ['Días', 'Semanas'];
  routesAdministration: String[] = ['Oral', 'Nasal', 'Tópica', 'Oftálmica'];
  dosesUn: String[] = ['mg', 'ml'];

  diagnosesIdSelected: String[] = [];
  diagnosesSelected: Diagnosis[] = [];

  treatments: TreatmentForm[] = [];
  treatmentsSelected: TreatmentForm[] = [];

  addTreatmentState: boolean = false;
  saveState: boolean = false;
  showAlertError: boolean = false;

  modalConfirmRef!: NgbModalRef;
  showSuccessAlert: boolean = false;

  userInfo?: IUserInfo;
  appointmentInfo?: IAppointmentInfo;

  isAppointment: boolean = false;



  private attentionRq: AttentionRq = new AttentionRq( '', null, [], [], '', '', '', null, '');

  constructor(
    private _diagnosisClientService: DiagnosisClientService,
    private _medicineClientService: MedicineClientService,
    private _pattientClientService: PattientClientService,
    private _attentionClientService: AttentionClientService,
    private modalService: NgbModal,
    private _userStoreService: UserStoreService,
    private _router: Router,
    private _appointmentStoreService: AppointmentStoreService,
    ) { 
      this.initratementInfo();
      this._diagnosisClientService.findAll().subscribe(data => {
        this.diagnoses = data;
      });
  
      this._medicineClientService.findAll().subscribe(data => {
        this.medicines = data;
      });


      this.userInfo = JSON.parse(this._userStoreService.userInfoStore) as IUserInfo;
      this.appointmentInfo = JSON.parse(this._appointmentStoreService.appointmentInfoStore) as IAppointmentInfo;
      if (this.appointmentInfo != null) {
        this.patientModel = this.appointmentInfo.patient;
        this.isAppointment = true;
      }
    }



  

  ngOnInit(): void {

   

  }
  
  initratementInfo () {
    this.attentionFormModel.durationType = this.durationTypes[0];
    this.attentionFormModel.routeAdministration = this.routesAdministration[0];
    this.attentionFormModel.frequencyType = this.frequencyTypes[0];
    this.attentionFormModel.doseUn = this.dosesUn[0];

  }
  getNewAttentionForm() {
    return new AttentionForm('', '', '', '', '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '', '', '', '');
  }

  addDiagnosis() {
    if (this.attentionFormModel.diagnosisId) {
      this.diagnosesIdSelected.push(this.attentionFormModel.diagnosisId)
      const diagnosis = this.diagnoses.filter(diagnosis => diagnosis.id == this.attentionFormModel.diagnosisId)[0];
      this.diagnosesSelected.push(diagnosis);

      console.log(this.attentionRq);
      
      this.attentionRq.diagnosisId = [];
    }
    
  }

  removeDiagnosis(diagnosisRemove: Diagnosis) {
    this.diagnosesSelected = this.diagnosesSelected.filter(diagnosis => diagnosis.id != diagnosisRemove.id);
  }


  
  addTreatment() {
    this.addTreatmentState = true;
    console.log(this.addTreatmentState);
    console.log(this.attentionFormModel);
    console.log(this.isValidTreatment());
    
    if (this.isValidTreatment()) {
      const medicine = this.medicines.filter(medicine => medicine.id == this.attentionFormModel.medicineId)[0];
      const diagnosis = this.diagnoses.filter(diagnosis => diagnosis.id == this.attentionFormModel.diagnosisIdByMedicine)[0];

      const treatment:TreatmentForm = {
        medicine: medicine,
        diagnosis: diagnosis,
        frequencyNumber: parseInt(this.attentionFormModel.frequencyNumber),
        frequencyType: this.attentionFormModel.frequencyType,
        durationNumber:  parseInt(this.attentionFormModel.durationNumber),
        durationType: this.attentionFormModel.durationType,
        dose: parseInt(this.attentionFormModel.dose),
        doseUn: this.attentionFormModel.doseUn,
        quantity: parseInt(this.attentionFormModel.quantity),
        routeAdministration: this.attentionFormModel.routeAdministration,
      }
      this.treatmentsSelected.push(treatment);
      this.attentionFormModel.dose = '';
      this.addTreatmentState = false;

    }
    
  
  }

  getTreatment(treatmentForm: TreatmentForm) : Treatment {
    const treatment:Treatment = {
      medicineId: treatmentForm.medicine.id,
      diagnosisId: treatmentForm.diagnosis.id,
      frequencyNumber: treatmentForm.frequencyNumber,
      frequencyType: treatmentForm.frequencyType,
      durationNumber: treatmentForm.durationNumber,
      durationType: treatmentForm.durationType,
      dose: treatmentForm.dose,
      doseUn: treatmentForm.doseUn,
      quantity: treatmentForm.quantity,
      routeAdministration: treatmentForm.routeAdministration,
    };
    return treatment;
  }

  removeTreatment(treatmentRemove: TreatmentForm) {
    this.treatmentsSelected = this.treatmentsSelected.filter(treatment => treatment.medicine.id != treatmentRemove.medicine.id);
  }

  

  validateInfo(parentEle: HTMLElement, confirm: any){
    
    this.saveState = true;

    this.attentionRq.diagnosisId = this.diagnosesSelected.map(diagnosis => diagnosis.id);   
    this.attentionRq.triage = this.getTriaje();
    this.attentionRq.treatments = this.treatmentsSelected.map(treatment => this.getTreatment(treatment));
    this.attentionRq.expirationDate = this.attentionFormModel.expirationDate;
    this.attentionRq.patientId = this.patientModel.id;

    this.attentionRq.healthPersonnelId = this.userInfo?.healthPersonnelId || '';
    this.attentionRq.appointmentId = this.appointmentInfo?.id || null;
    this.attentionRq.patientReport = this.attentionFormModel.patientReport;
    this.attentionRq.recommendations = this.attentionFormModel.recommendations;

    const hasPatientId = !!this.attentionRq.patientId;
    const hasTriaje = !!this.attentionRq.triage.weight && !!this.attentionRq.triage.height && !!this.attentionRq.patientReport;
    const hasDignosis = !!this.attentionRq.diagnosisId.length;
    const hasTreatments = !!this.attentionRq.treatments.length;
    const hasExpirationDate = !!this.attentionRq.expirationDate;
    const hasHealthPersonnelId = !!this.attentionRq.healthPersonnelId;
   
    const isValid = hasDignosis && hasTriaje && hasTreatments && hasExpirationDate && hasPatientId && hasHealthPersonnelId;
    

    if(isValid) {
      this.modalConfirmRef = this.modalService.open(confirm, { scrollable: true, size: 's' });
    } else {
      this.showAlertError = true;

      let childEle;

      if (!hasPatientId) {
        childEle = parentEle.querySelector('#patient');
      } else if(!hasTriaje) {
        childEle = parentEle.querySelector('#triage');
      } else if(!hasDignosis) {
        childEle = parentEle.querySelector('#diagnoses');
      } else if(!hasTreatments) {
        childEle = parentEle.querySelector('#treatments');
      } else {
        childEle = parentEle.querySelector('#expirationDate');
      }
      childEle?.scrollIntoView();
  
    }
   
  }

  saveInfo(formPatient: NgForm, formTriage: NgForm, formTreatment: NgForm) {
    this._attentionClientService.save(this.attentionRq).subscribe(data => {
      window.scrollTo(0, 0);
      this.modalConfirmRef.close();
      this.resetForm(formPatient, formTriage, formTreatment);
      this.showSuccessAlert = true;
      setTimeout(() => {
        this.showSuccessAlert = false;
      }, 1500);
    });
    
  }

  resetForm(formPatient: NgForm, formTriage: NgForm, formTreatment: NgForm) {
    formPatient.resetForm();
    formTriage.resetForm();
    formTreatment.resetForm();
    this.attentionFormModel = this.getNewAttentionForm();
    this.patientModel = this.getNewPatientModel();
    this.diagnosesIdSelected = [];
    this.diagnosesSelected = [];
    this.treatmentsSelected = [];
    this.initratementInfo();

    this.isAppointment = false;
    this.saveState = false;
  }

 

  getTriaje():Triage {
    const triage: Triage = {
      weight: this.attentionFormModel.weight ? parseInt(this.attentionFormModel.weight) : null,
      height: this.attentionFormModel.height ? parseInt(this.attentionFormModel.height) : null,
      bloodPressure: this.attentionFormModel.bloodPressure ? parseInt(this.attentionFormModel.bloodPressure) : null,
      breathingFrequency: this.attentionFormModel.breathingFrequency ? parseInt(this.attentionFormModel.breathingFrequency) : null,
      heartRate: this.attentionFormModel.heartRate ? parseInt(this.attentionFormModel.heartRate) : null,
      temperature: this.attentionFormModel.temperature ? parseInt(this.attentionFormModel.temperature) : null,
    }
   
    return triage;
  }

  isValidTreatment() {
    return this.attentionFormModel.medicineId && this.attentionFormModel.diagnosisIdByMedicine && this.attentionFormModel.frequencyNumber
    && this.attentionFormModel.durationNumber && this.attentionFormModel.dose && this.attentionFormModel.quantity;
  }

  searchByDocumentNumber() {
    if (this.patientModel.documentNumber) {
      this._pattientClientService.findByDocumentNumber(this.patientModel.documentNumber).subscribe(data => {
        this.setPatientModel(data);
      });
    }
   
  }

  searchByinsuredCode() {
    if (this.patientModel.insuredCode) {
      this._pattientClientService.findByInsureCode(this.patientModel.insuredCode).subscribe(data => {
        this.setPatientModel(data);
      });
    }
  }

  setPatientModel(data: PatientRp[]) {
    if (data.length) {
      this.patientModel = data[0];
    } else {
      this.patientModel = this.getNewPatientModel();
    }
  }

  viewPatientHistory(longContent: any) {
    this.modalService.open(longContent, { scrollable: true, size: 'xl' });
  }

  getNewPatientModel() {
    return new PatientRp('', '', '', '', '', '', '', '', '', '');
  }

  cancel() {
    if (this._appointmentStoreService.appointmentInfoStore != null) {
      this._appointmentStoreService.removeAppointmentInfoStore();
    }
    this._router.navigateByUrl("") ;
  }



}
