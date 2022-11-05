import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserInfo } from 'src/app/shared/models/User';
import { UserStoreService } from 'src/app/shared/stores/user/user-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userInfo: IUserInfo;

  constructor( 
    private _router: Router,
    private _userStoreService: UserStoreService,
    ) {
    this.userInfo = JSON.parse(this._userStoreService.userInfoStore) as IUserInfo;
    
   }

  ngOnInit(): void {
  }

  logout(){
    this._userStoreService.removeUserInfoStore();
    this._router.navigateByUrl("login")  
  }

  

}
