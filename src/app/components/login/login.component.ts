import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { GenericComponent } from '../generic/generic.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends GenericComponent implements OnInit {
  public login = new Login;

  constructor(authService: AuthService) { 
    super(authService);
  }

  ngOnInit(): void {
  }

  loginUser(){
    this.authService.loginUser(this.login).subscribe(response => {
      console.log(response);
    });
  }

}
