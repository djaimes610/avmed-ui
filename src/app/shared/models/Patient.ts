
export class PatientRp {
    constructor(
        public id: string,
        public name: string,
        public paternalLastName: string,
        public maternalLastName: string,
        public documentNumber: string,
        public birthDate: string,
        public sex: string,
        public insuredCode: string,
        public clinicalHistoryNumber: string,
        public age: String,
    ) { }
  }
  export class PatientRq {
    constructor(
        public name: string,
        public paternalLastName: string,
        public maternalLastName: string,
        public documentNumber: string,
        public birthDate: string,
        public sex: string,
        public insuredCode: string,
        public clinicalHistoryNumber: string,
    ) { }
  }

  export interface IPatient {
      name: string,
      paternalLastName: string,
      maternalLastName: string,
      documentNumber: string,
      birthDate: string,
      sex: string,
      insuredCode: string,
      clinicalHistoryNumber: string,
  }

  export interface IPatientRp {
    code: string, //codigo: 1 --> Exitoso, codigo: 11 --> Usuario no existe
    description: string, //mesaje 'Exitoso'
}