import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { map } from 'rxjs/operators';
import { Login } from '../models/login';
import { AuthResponse } from '../models/auth-response';

@Injectable()
export class AuthService extends GenericService{
    // baseUrl = 'https://api.rivaprecision.com:7001/api/auth';
    baseUrl = 'http://localhost:59784/api/login';
    private currentUserSubject: BehaviorSubject<AuthResponse>;
    public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(public http: HttpClient){
        super(http);
        this.currentUserSubject = new BehaviorSubject<AuthResponse>(JSON.parse(localStorage.getItem('currentUser')));
    }

    get isLoggedIn(){
        return this.loggedIn.asObservable();
    }

    public get currentUserValue(){
        return this.currentUserSubject.value;
    }

    public loginUser(login: Login){
        return this.post(login, '').pipe(map(response => {
            if(response.wasSuccess)
                this.setUserCache(response.responseObject);
            return response;
        }));
        // return this.post(login, '/login').pipe(map(response => {
        //     if(response.wasSuccess)
        //         this.setUserCache(response.responseObject);
        //     return response;
        // }));
    }

    public logout(){
        localStorage.removeItem('currentUser');
        this.loggedIn.next(false);
        this.currentUserSubject.next(null);
    }

    public registerUser(login: Login){
        return this.post(login, '/register');
    }

    private setUserCache(user: AuthResponse){
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.loggedIn.next(true);
        this.currentUserSubject.next(user);
    }
}