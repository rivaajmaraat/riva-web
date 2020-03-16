import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { GenericComponent } from '../generic/generic.component';
import { AuthService } from 'src/app/services/auth.service';
import { LoadService } from 'src/app/custom/load-overlay/load-overlay.service';

@Component({
  selector: 'riva-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends GenericComponent implements OnInit {
  public login = new Login;

  constructor(authService: AuthService
    , private loadService: LoadService) { 
    super(authService);
    this.loadService.load(true);
  }

  ngOnInit(): void {
  }

  loginUser(){
    this.loadService.load(true);
    this.authService.loginUser(this.login).subscribe(response => {
      console.log(response);
      this.loadService.load(false);
    });
  }

}
