import { PatientRp } from "./Patient";



  export class AppointmentRp {
    constructor(
        public id: string,
        public day: string,
        public startHour: string,
        public patient: PatientRp,
        public healthPersonnelId: string,
    ) { }
  }
  
  export interface IAppointmentInfo {
    id: string
    patient: PatientRp,

  }



