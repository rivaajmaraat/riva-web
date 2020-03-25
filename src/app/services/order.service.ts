import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends GenericService{
  baseUrl = 'https://localhost:7001/api/order';

  constructor(http: HttpClient) {
    super(http);
  }

  upload(formData: FormData, client: string){
    return this.http.post(this.baseUrl + '/' + client + '/upload', formData, {reportProgress: true, observe: 'events'});
  }
}
