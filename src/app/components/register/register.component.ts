import { Component, OnInit } from '@angular/core';
import { GenericComponent } from '../generic/generic.component';
import { AuthService } from 'src/app/services/auth.service';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'riva-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends GenericComponent implements OnInit{
  public login = new Login;

  constructor(authService: AuthService) { 
    super(authService);
  }

  ngOnInit(): void {
  }

  register(){
    this.authService.registerUser(this.login).subscribe(response => {
      console.log(response);
    });
  }

}
