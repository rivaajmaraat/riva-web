import { Component, OnInit } from '@angular/core';
import { GenericComponent } from '../generic/generic.component';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'riva-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent extends GenericComponent implements OnInit {

  constructor(authService: AuthService
    , private orderService: OrderService) {
    super(authService);
   }

  ngOnInit(): void {
  }

  public uploadRGWFile = (files) => {
    if(files.length === 0)
      return;
    
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.orderService.upload(formData, 'rgw').subscribe(event => {
      if(event.type === HttpEventType.UploadProgress)
        console.log('Uploading: ' + Math.round(100 * event.loaded / event.total) + '%');
      else if (event.type === HttpEventType.Response)
      {
        console.log('Upload success.');
        console.log(event);
      }
    }, error => {
      console.log(error.error);
    });
  }

  public uploadHOFFile = (files) => {
    if(files.length === 0)
      return;
    
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.orderService.upload(formData, 'hof').subscribe(event => {
      if(event.type === HttpEventType.UploadProgress)
        console.log('Uploading: ' + Math.round(100 * event.loaded / event.total) + '%');
      else if (event.type === HttpEventType.Response)
      {
        console.log('Upload success.');
        console.log(event);
      }
    }, error => {
      console.log(error.error);
    });
  }
}
