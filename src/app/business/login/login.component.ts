import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserClienService } from 'src/app/shared/clients/user/user-client.service';
import { IUserInfo, User } from 'src/app/shared/models/User';
import { UserStoreService } from 'src/app/shared/stores/user/user-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userModel = new User('', '');
  isInvalid: boolean = false;

  constructor(
    private _userService: UserClienService,
    private _userStoreService: UserStoreService,
    private _router: Router
    ) { }

  ngOnInit(): void {
  }

  save() {
    // const userRp: IUserInfo ={
    //   userId: 'userId01',
    //   healthPersonnelId: 'healthPersonnelId01',
    //   healthPersonnelName: 'healthPersonnelName01',
    //   healthPersonnelSpecialty: 'healthPersonnelSpecialty01',

    // };
    // this._userStoreService.userInfoStore = JSON.stringify(userRp);
    // this._router.navigateByUrl("")  


    this._userService.validateUser(this.userModel).subscribe(userRp => {

      //codigo: 1 --> Exitoso, codigo: 11 --> Usuario no existe
      if (userRp.code == '1'){
        //guardar la info usuario
        this._userStoreService.userInfoStore = JSON.stringify(userRp.data);
        this._router.navigateByUrl("")  

        //te llevo a la pantalla principal de la aplicacion
      } 

      if (userRp.code == '11'){
        //error
        this.isInvalid = true;
      }
        
    });
    
  }

}
