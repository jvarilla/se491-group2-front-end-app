import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {UserAuthService} from "../../../service/user-auth/user-auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;
  isAuthenticated$: Observable<boolean>;

  constructor(private readonly userAuthService: UserAuthService) {
    this.isAuthenticated$ = this.userAuthService.isAuthenticated$

  }

  ngOnInit(): void {}

  onLogoutButtonClicked(): void {
    this.userAuthService.logout();
  }
}
