import {ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {last, map, Observable, of, ReplaySubject, Subject, take, tap} from "rxjs";
import {Component, Injectable} from "@angular/core";
import {UserAuthService} from "../service/user-auth/user-auth.service";

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanDeactivate<any> {
  constructor(private readonly userAuthService: UserAuthService,
              private readonly router: Router) {
  }

  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      if (!this.userAuthService._isAuthenticated) {
        return false;
      }
      return true;
    }
}
