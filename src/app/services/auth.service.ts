import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { map } from 'rxjs/operators';
import { Login } from '../models/login';

@Injectable()
export class AuthService extends GenericService{
    baseUrl = "https://localhost:7001/api/auth";

    constructor(public http: HttpClient){
        super(http);
    }

    public loginUser(login: Login){
        return this.post(login, '/login');
    }

    public registerUser(login: Login){
        return this.post(login, '/register');
    }
}