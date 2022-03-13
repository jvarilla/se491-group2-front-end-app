import {Injectable} from "@angular/core";
import {HttpService} from "../http/http.service";
import {Observable, Subject} from "rxjs";
import {API_ROUTES} from "../routes/api-routes";
import {UserAuthService} from "../user-auth/user-auth.service";
import {Location} from "../../classes/location/location.interface";

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private locationsSubject: Subject<Location[]> = new Subject<Location[]>();
  public locations$: Observable<Location[]> = this.locationsSubject.asObservable();

  constructor(private readonly httpService: HttpService,
              private readonly userAuthService: UserAuthService) {}

  public getLocationsForCurrentUser() {
    const userName = this.userAuthService.getCurrentUser()?.userName || '';
    this.httpService.get<Location[]>(
      API_ROUTES.LOCATION.GET_BY_USERNAME(userName))
      .subscribe({
        next: (locations: Location[]) => {
          this.locationsSubject.next(locations);
        }
      });
  }
}
