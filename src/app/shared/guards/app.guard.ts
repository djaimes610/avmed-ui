import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserStoreService } from '../stores/user/user-store.service';

@Injectable({
    providedIn: 'root'
})
export class AppGuard implements CanActivate {
    constructor(
       private _userStoreService: UserStoreService,
       private _router: Router
    ) {
    }

    canActivate(): boolean {
        const userInfo = this._userStoreService.userInfoStore;
        console.log(userInfo);
        
        if (userInfo == null) {
            console.log('here');
            
            this._router.navigateByUrl("login")  
            return false;

        }
        return true;
    }

}
