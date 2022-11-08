export interface IUserInfo {
    userId: string,
    healthPersonnelId: string,
    healthPersonnelName: string,
    healthPersonnelSpecialty: string,
  }
  

export class User {
    constructor(
        public username: string,
        public password: string,
    ) { }
}



export interface IUserRp {
    code: string, //codigo: 1 --> Exitoso, codigo: 11 --> Usuario no existe
    description: string, //mesaje 'Exitoso'
    data: IUserInfo,
}