import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenericComponent } from '../generic/generic.component';
import { AuthService } from 'src/app/services/auth.service';
import { Login } from 'src/app/models/login';
import { LoadService } from 'src/app/custom/load-overlay/load-overlay.service';

@Component({
  selector: 'riva-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends GenericComponent implements OnInit{
  public login = new Login;
  public error = { UserName: false, Password: false };

  constructor(authService: AuthService
    , private loadService: LoadService
    , private router: Router) { 
    super(authService);
  }

  ngOnInit(): void {
    this.loadService.load(false);
  }

  register(){
    if (!this.checkStringIfEmpty(this.login.userName) && !this.checkStringIfEmpty(this.login.password)) {
      this.loadService.load(true);
      this.error.UserName = false;
      this.error.Password = false;
      this.authService.registerUser(this.login).subscribe(response => {
        if(!response.wasSuccess){ 
          // Error alert here
          console.log('Error on login.');
          this.loadService.load(false);
        }
        this.loadService.load(false);
        this.router.navigate(['/']);
      });
    }
    else{
      this.error.UserName = true;
      this.error.Password = true;
    }
    
  }
}
