import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class GenericService{
    public baseUrl: string;
    public http: HttpClient;
    public headers = new HttpHeaders().set('Content-type', 'application/json');

    constructor(_http: HttpClient){
        this.http = _http;
    }

    public post(object: any, endpoint: string): Observable<any>{
        return this.http.post(this.baseUrl + endpoint, JSON.stringify(object), { headers: this.headers });
    }
}