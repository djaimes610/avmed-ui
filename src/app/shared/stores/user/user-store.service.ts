import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUserInfo } from '../../models/User';
import { AppStoreService } from '../app/app-store.service';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private readonly USER_INFO = 'userInfo';
  private userInfo!: IUserInfo;
  private isUserSubject = new BehaviorSubject<IUserInfo>(this.userInfo);
  public isUser$ = this.isUserSubject.asObservable();


  constructor( private _appStore: AppStoreService) {
    this.isUser$.subscribe(userInfo => this.userInfo = userInfo);

   }

  public get userInfoStore(): string {
    const { USER_INFO } = this;
    return this._appStore.getData(USER_INFO);
  }

  public set userInfoStore(user: string) {
    const { USER_INFO } = this;
    this._appStore.saveData(USER_INFO, user);
  }

  public removeUserInfoStore(): void {
    const { USER_INFO } = this;
    this._appStore.removeStorageItem(USER_INFO);
  }

  public get userInfo$(): Observable<IUserInfo> {
    return this.isUserSubject.asObservable();
  }

  public isLogin(): Boolean {
    return this.userInfoStore != null;
  }


}
