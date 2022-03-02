import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {BannerService} from "../shared/banner/banner.service";
import {LOGOUT_SUCCESS_BODY, LOGOUT_SUCCESS_TITLE} from "../../constants/feedback.constants";
import {UserAuthService} from "../../service/user-auth/user-auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  queryParamsSubscription: Subscription;
  isAuthenticatedSubscription: Subscription;

  constructor(private readonly fb: FormBuilder,
              private readonly router: Router,
              private readonly route: ActivatedRoute,
              private readonly bannerService: BannerService,
              private readonly userAuthService: UserAuthService) {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });

    this.queryParamsSubscription = this.route.queryParams
      .subscribe((params) => {
        if (params.hasOwnProperty('logout')) {
          this.showLogoutBanner()
        }
      });

    this.isAuthenticatedSubscription = this.userAuthService
      .isAuthenticated$.subscribe((isAuthenticated) => {
        if (isAuthenticated == true) {
          this.router.navigateByUrl('/weather');
        }
      });
  }

  ngOnInit(): void {}

  onSubmitLogin(): void {
    this.userAuthService.login('', '');
  }

  showLogoutBanner(): void {
    this.bannerService.showSuccessBanner(
      LOGOUT_SUCCESS_TITLE,
      LOGOUT_SUCCESS_BODY);
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription?.unsubscribe();
    this.isAuthenticatedSubscription?.unsubscribe();
  }
}
