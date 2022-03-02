import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {UserAuthService} from "../service/user-auth/user-auth.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private readonly userAuthService: UserAuthService,
              private readonly router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.userAuthService._isAuthenticated) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
