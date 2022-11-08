import { Diagnosis } from "./Diagnosis";
import { Medicine } from "./Medicine";
import { PatientRp } from "./Patient";

 export class Triage {
    constructor(
        public bloodPressure: Number | null,
        public heartRate: Number | null,
        public temperature: Number | null,
        public breathingFrequency:  Number | null,
        public weight: Number  | null,
        public height: Number | null,
    ) { }
  }

  export class TriageRp {
    constructor(
        public bloodPressure: String,
        public heartRate: String,
        public temperature: String,
        public breathingFrequency: string,
        public weight: String,
        public height: String,
    ) { }
  }

  export class Treatment {
    constructor(
        public medicineId: String,
        public diagnosisId: String,
        public frequencyNumber: Number,
        public frequencyType: String,
        public durationNumber: Number,
        public durationType: String,
        public dose: Number,
        public doseUn: String,
        public quantity: Number,
        public routeAdministration: String,
    ) { }
  }
export class AttentionRq {
    constructor(
        public patientReport: string,
        public triage: Triage  | null,
        public diagnosisId: String[]  | [],
        public treatments: Treatment[] | [],
        public expirationDate: string,
        public patientId: string,
        public healthPersonnelId: string,
        public appointmentId: string | null,
        public recommendations: String
    ) { }
  }

  export class TreatmentRp {
    constructor(
        public medicine: Medicine,
        public diagnosisId: String,
        public frequencyNumber: Number,
        public frequencyType: String,
        public durationNumber: Number,
        public durationType: String,
        public dose: Number,
        public doseUn: String,
        public quantity: Number,
        public routeAdministration: String,
    ) { }
  }

  export class HealthPersonnelRp {
    constructor(
        public id: string,
        public name: string,
        public paternalLastName: string,
        public maternalLastName: string,
        public signature: string,
        public specialty: string,
        public documentNumber: string
    ) { }
  }
  export class AttentionRp {
    constructor(
        public id: string,
        public patientReport: string,
        public updateDate: string,
        public triage: TriageRp,
        public diagnoses: Diagnosis[]  | [],
        public treatments: TreatmentRp[] | [],
        public expirationDate: string,
        public patient: PatientRp,
        public healthPersonnel: HealthPersonnelRp,
        public recommendations: String
    ) { }
  }
  

  export interface IAttentionRq {
    patientReport: string,
    triage: Triage,
    diagnosisId: String[],
    treatments: Treatment[],
    expirationDate: string,
    patientId: string,
    healthPersonnelId: string,
    appointmentId: string,
  }

  export class TreatmentForm {
    constructor(
        public medicine: Medicine,
        public diagnosis: Diagnosis,
        public frequencyNumber: Number,
        public frequencyType: String,
        public durationNumber: Number,
        public durationType: String,
        public dose: Number,
        public doseUn: String,
        public quantity: Number,
        public routeAdministration: String,
    ) { }
  }

export class AttentionForm {
constructor(
    public patientReport: string,
    public bloodPressure: string,
    public breathingFrequency: string,
    public heartRate: string,
    public temperature: string,
    public weight: string,
    public height: string,

    public diagnosisId: String,
    public recommendations: string,

    public medicineId: String,
    public diagnosisIdByMedicine: String,
    public frequencyNumber: string,
    public frequencyType: String,
    public durationNumber: string,
    public durationType: String,
    public dose: string,
    public doseUn: String,
    public quantity: string,
    public routeAdministration: String,

    public expirationDate: string,
    public patientId: string,
    public healthPersonnelId: string,
    public appointmentId: string,
) { }
}


