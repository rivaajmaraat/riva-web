import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends GenericService{
  // baseUrl = 'https://api.rivaprecision.com:7001/api/account';
  baseUrl = 'http://localhost:59784/api/login';

  constructor(public http: HttpClient){
    super(http);
  }

  getAccountDetails(id: number){
    return this.get(id, '');
  }

  updateLoginDetails(login: Login){
    return this.put(login, '');
  }

  deleteLogin(id: number){
    return this.delete(id, '');
  }
}
