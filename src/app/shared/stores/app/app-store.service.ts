import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStoreService {

  constructor() { }

  
  saveData(key:string,value:string){
    localStorage.setItem(key,JSON.stringify(value));
  }
  getData(key:string):any{
   const item = localStorage.getItem(key)
   return item != null ? JSON.parse(item) : null;
  }

  removeStorageItem(key: string) {
    return localStorage.removeItem(key);
  }

}
