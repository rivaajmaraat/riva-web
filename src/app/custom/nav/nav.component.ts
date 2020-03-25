import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { LoadService } from '../load-overlay/load-overlay.service';

@Component({
  selector: 'riva-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService
    , private router: Router
    , private loadService: LoadService) {
      this.isLoggedIn$ = this.authService.isLoggedIn;
     }

  ngOnInit(): void {
    this.loadService.load(false);
  }

}
