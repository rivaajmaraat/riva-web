import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { GenericService } from './services/generic.service';
import { AuthService } from './services/auth.service';
import { LoadOverlayComponent } from './custom/load-overlay/load-overlay.component';
import { AccountsTableComponent } from './components/account/accounts-table/accounts-table.component';
import { AccountService } from './services/account.service';
import { NavComponent } from './custom/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderComponent } from './components/order/order.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoadOverlayComponent,
    AccountsTableComponent,
    NavComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [
    GenericService,
    AuthService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
