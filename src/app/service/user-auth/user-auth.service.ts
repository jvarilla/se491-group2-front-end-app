import {Injectable} from "@angular/core";
import {HttpService} from "../http/http.service";
import {BehaviorSubject, Observable, ReplaySubject, Subject} from "rxjs";
import {mockUser} from "../../mock-data/mock-data";
import {User} from "../../classes/user/user.interface";
import {Router} from "@angular/router";
import {Login} from "../../classes/login/login.interface";
import {API_ROUTES} from "../routes/api-routes";
import {BannerService} from "../../components/shared/banner/banner.service";
import {SessionStorageService} from "../session-storage/session-storage.service";
import {LOGIN_FAILURE_BODY, LOGIN_FAILURE_TITLE} from "../../constants/login.constants";

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private static readonly USER_SESSION_STORAGE_KEY = 'user';
  public _isAuthenticated = false;

  private loginResultSubject: Subject<User> = new Subject<User>();
  public loginResult$: Observable<User> = this.loginResultSubject.asObservable();

  private isAuthenticatedSubject = new ReplaySubject<boolean>();
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private currentUser: User | undefined;


  constructor(private readonly httpService: HttpService,
              private readonly sessionStorageService: SessionStorageService,
              private readonly bannerService: BannerService,
              private readonly router: Router) {
    const userFromSessionStorageString = this.sessionStorageService.getEntry(
        UserAuthService.USER_SESSION_STORAGE_KEY);

    if (userFromSessionStorageString !== null) {
      const userFromSessionStorage = {
        ...JSON.parse(userFromSessionStorageString)} as User;
      this.currentUser = userFromSessionStorage;
      this.loginResultSubject.next(userFromSessionStorage);
      this.isAuthenticatedSubject.next(true);
      this._isAuthenticated = true;
      this.router.navigateByUrl('/weather');
    } else {
      this.isAuthenticatedSubject.next(false);
    }
  }

  public login(login: Login): void {
    this.httpService.post<User>(
      API_ROUTES.LOGIN.POST(),
      login,
    ).subscribe({
      next:  (user: User) => {
        this.currentUser = user;
        this.loginResultSubject.next(user);
        this.isAuthenticatedSubject.next(true);
        this._isAuthenticated = true;
        this.sessionStorageService.saveEntry(
          UserAuthService.USER_SESSION_STORAGE_KEY,
          JSON.stringify(user));
        this.bannerService.closeBanners();
        this.router.navigateByUrl('/weather');
      },
      error: () => {
        this.bannerService
          .showErrorBanner(
            LOGIN_FAILURE_TITLE,
            LOGIN_FAILURE_BODY);
      }
    });
  }

  public logout(): void {
    this._isAuthenticated = false;
    this.isAuthenticatedSubject.next(false);
    this.sessionStorageService.clearEntry(
      UserAuthService.USER_SESSION_STORAGE_KEY);
    setTimeout(() => {
      this.router.navigateByUrl('/login?logout=true');
    }, 10);
  }

  public getCurrentUser(): User | undefined {
    return this.currentUser;
  }
}
