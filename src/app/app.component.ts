import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AppointmentStoreService } from './shared/stores/appointment/appointment-store.service';
import { UserStoreService } from './shared/stores/user/user-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isPathLogin: Boolean = false;
  isPathAttentionRegister: Boolean = false;
  title = 'WEB-Avmed';
  constructor(   
    private _router: Router,
    private _userStoreService: UserStoreService,
    private _appointmentStoreService: AppointmentStoreService,

    ) {


      this._router.events
      .pipe(
        filter(value => value instanceof NavigationEnd)
      )
      .subscribe((navigation) => {
        const nav: NavigationEnd = navigation as NavigationEnd;
        window.scrollTo(0, 0);

        this.isPathLogin = nav.url == '/login';
        console.log(this._userStoreService.isLogin());
        

        if (this.isPathLogin && this._userStoreService.isLogin()) {
          this._router.navigateByUrl("")  
        }

        this.isPathAttentionRegister = nav.url == '/registro-atencion';
        if (!this.isPathAttentionRegister && this._appointmentStoreService.appointmentInfoStore != null) {
          this._appointmentStoreService.removeAppointmentInfoStore();
        }

      });

  }

}
