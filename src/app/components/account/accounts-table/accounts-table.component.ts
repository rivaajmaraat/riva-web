import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { LoadService } from 'src/app/custom/load-overlay/load-overlay.service';
import { AccountService } from 'src/app/services/account.service';
import { Login } from 'src/app/models/login';
import { Router } from '@angular/router';
import { GenericComponent } from '../../generic/generic.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'riva-accounts-table',
  templateUrl: './accounts-table.component.html',
  styleUrls: ['./accounts-table.component.scss']
})
export class AccountsTableComponent extends GenericComponent implements OnInit {
  logins: Login[];
  newLogins: Login[] = [];

  constructor(private loadService: LoadService
    , private accountService: AccountService
    , private router: Router
    , authService: AuthService) { 
      super(authService);
      this.authService.logout();
    }

  ngOnInit(): void {
    this.loadTable();
  }

  // edit(id: number){
  //   this.router.navigate(['/account-details', id]);
  // }

  loadTable(){
    this.accountService.getList().subscribe(response => {
      this.logins = response.responseObject;
      this.loadService.load(false);
    });
  }

  newRow(){
    let newLogin = new Login;
    newLogin.loginId = 0;
    newLogin.userName = '';
    newLogin.password = '';
    this.newLogins.push(newLogin);
  }

  save(login: Login){
    if(login.loginId !==0){
      this.accountService.updateLoginDetails(login).subscribe(response => {
        if(!response.wasSuccess)
          console.log(response.error); //Temporary error
        this.loadTable();
        this.loadService.load(false);
      }, error => {
        console.log(error.error); //Temporary error
      });
    }
    else{
      if(!this.checkStringIfEmpty(login.userName) && !this.checkStringIfEmpty(login.password))
      {
        this.authService.registerUser(login).subscribe(response => {
          if(!response.wasSuccess)
            console.log(response.error); //Temporary error
          this.newLogins = this.newLogins.filter(n => n.userName !== login.userName && n.password !== login.password);
          this.loadTable();
          this.loadService.load(false);
        }, error => {
          console.log(error.error); //Temporary error
        });
      }
        
    }
  }

  updateLoginUsername(login: Login){
    login.password = '';
    this.accountService.updateLoginDetails(login).subscribe(response => {
      if(!response.wasSuccess)
        console.log(response.error); //Temporary error
      this.loadTable();
      this.loadService.load(false);
    }, error => {
      console.log(error.error); //Temporary error
    });
  }

  updateLoginPassword(login: Login){
    login.userName = '';
    this.accountService.updateLoginDetails(login).subscribe(response => {
      if(!response.wasSuccess)
        console.log(response.error); //Temporary error
      this.loadTable();
      this.loadService.load(false);
    }, error => {
      console.log(error.error); //Temporary error
    });
  }

  deleteLogin(id: number){
    this.accountService.deleteLogin(id).subscribe(response => {
      if(!response.wasSuccess){
        // Error alert here
        console.log('Error'); // Temporary error only
      }
      this.loadTable();
      this.loadService.load(false);
      this.router.navigate(['/']);
    }, error => {
      console.log(error.error); // Temporary error only
    });
  }

  deleteNewLogin(id: number){
    this.newLogins = this.newLogins.filter(n => n.loginId !== id);
  }

}
