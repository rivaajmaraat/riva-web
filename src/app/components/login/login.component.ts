import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  public error = { UserName: false, Password: false };
  public returnUrl: string;

  constructor(authService: AuthService
    , private loadService: LoadService
    , private route: ActivatedRoute
    , private router: Router) { 
    super(authService);
    this.loadService.load(false);
    if (authService.currentUserValue) {
        this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loadService.load(false);
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  loginUser(){
    if (!this.checkStringIfEmpty(this.login.userName) && !this.checkStringIfEmpty(this.login.password)) {
      this.loadService.load(true);
      this.error.UserName = false;
      this.error.Password = false;
      this.authService.loginUser(this.login).subscribe(response => {
        if(!response.wasSuccess){ 
          // Error alert here
          console.log('Error on login.');
          this.loadService.load(false);
        }
        // this.loadService.load(false);
        console.log(this.authService.currentUserValue);
        if (this.authService.currentUserValue) {
          this.router.navigate([this.returnUrl]);
        }
      }, error => {
        console.log(error.error);
        this.loadService.load(false);
      });
    }
    else{
      this.error.UserName = true;
      this.error.Password = true;
    }
  }

}
