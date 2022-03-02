import {Injectable} from "@angular/core";
import {HttpService} from "../http/http.service";
import {BehaviorSubject, Observable, ReplaySubject, Subject} from "rxjs";
import {mockUser} from "../../mock-data/mock-data";
import {User} from "../../classes/user/user.interface";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  public _isAuthenticated = false;

  private loginResultSubject: Subject<User> = new Subject<User>();
  public loginResult$: Observable<User> = this.loginResultSubject.asObservable();

  private isAuthenticatedSubject = new ReplaySubject<boolean>();
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private currentUser: User | undefined;

  constructor(private readonly httpService: HttpService,
              private readonly router: Router) {
    this.isAuthenticatedSubject.next(false);
  }

  public login(username: string, password: string): void {
    this.currentUser = mockUser;
    this.loginResultSubject.next(mockUser);
    this.isAuthenticatedSubject.next(true);
    this._isAuthenticated = true;
    this.router.navigateByUrl('/weather');
  }

  public logout(): void {
    this._isAuthenticated = false;
    this.isAuthenticatedSubject.next(false);
    setTimeout(() => {
      this.router.navigateByUrl('/login?logout=true');
    }, 10);
  }

  public getCurrentUser(): User | undefined {
    return this.currentUser;
  }
}
