import {Injectable} from "@angular/core";
import {HttpService} from "../http/http.service";
import {Observable, Subject} from "rxjs";
import {mockUser} from "../../mock-data/mock-data";
import {User} from "../../classes/user/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private loginResultSubject: Subject<User> = new Subject<User>();
  public loginResult$: Observable<User> = this.loginResultSubject.asObservable();
  private currentUser: User | undefined;

  constructor(private readonly httpService: HttpService) {}

  public login(userId: string, password: string): void {
    this.currentUser = mockUser;
    this.loginResultSubject.next(mockUser);
  }

  public logout(): void {}

  public getCurrentUser(): User | undefined {
    return this.currentUser;
  }
}
