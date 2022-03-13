import {Injectable} from "@angular/core";
import {HttpService} from "../http/http.service";
import {WeatherResult} from "../../classes/weather/weather-result.interface";
import {Observable, Subject, take} from "rxjs";
import {API_ROUTES} from "../routes/api-routes";
import {GeolocationService} from "../geolocation/geolocation.service";
import {Coords} from "../../classes/geolocation/coords.interface";
import {BannerService} from "../../components/shared/banner/banner.service";
import {GET_WEATHER_FAILURE_BODY, GET_WEATHER_FAILURE_TITLE} from "../../constants/weather.constants";
import {UserAuthService} from "../user-auth/user-auth.service";
import {SessionStorageService} from "../session-storage/session-storage.service";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weatherResultSubject: Subject<WeatherResult> = new Subject<WeatherResult>();
  public weatherResult$: Observable<WeatherResult> = this.weatherResultSubject.asObservable();
  private _previouslySearchedLocation: string | undefined;

  constructor(private readonly httpService: HttpService,
              private readonly userAuthService: UserAuthService,
              private readonly geolocationService: GeolocationService,
              private readonly bannerService: BannerService) {}

  getWeatherForCurrentLocation() {
    this.geolocationService.getCurrentCoords()
      .subscribe((coords: Coords) => {
        this.getWeatherByLocationByCoords(coords.latitude, coords.longitude);
      });
  }

  getWeatherByCityName(cityName: string): void {
    const userName: string = this.userAuthService.getCurrentUser()?.userName || '';
    this.httpService
      .get<WeatherResult>(
        API_ROUTES.WEATHER.GET_BY_CITY(cityName, userName))
      .subscribe({
        next: (weatherResult: WeatherResult) => {
          this._previouslySearchedLocation = weatherResult.currentLocation.cityName;
          this.weatherResultSubject.next(weatherResult)
        },
        error: () => this.handleFailureToGetWeather()
      });
  }

  getWeatherByLocationByZipCode(zipCode: number): void {
    const userName: string = this.userAuthService.getCurrentUser()?.userName || '';
    this.httpService
      .get<WeatherResult>(API_ROUTES.WEATHER.GET_BY_ZIPCODE(zipCode, userName))
      .subscribe({
        next: (weatherResult: WeatherResult) => {
          this._previouslySearchedLocation = weatherResult.currentLocation.cityName;
          this.weatherResultSubject.next(weatherResult)
        },
        error: () => this.handleFailureToGetWeather()
      });
  }

  getWeatherByLocationByCoords(lat: number, long: number): void {
    const userName: string = this.userAuthService.getCurrentUser()?.userName || '';
    console.log('user name: ', userName);
    this.httpService
      .get<WeatherResult>(API_ROUTES.WEATHER.GET_BY_LAT_LONG(lat, long, userName))
      .subscribe({
        next: (weatherResult: WeatherResult) => {
          this._previouslySearchedLocation = weatherResult.currentLocation.cityName;
          this.weatherResultSubject.next(weatherResult)
        },
        error: () => this.handleFailureToGetWeather()
      });
  }

  private handleFailureToGetWeather(): void {
    this.bannerService.showErrorBanner(
      GET_WEATHER_FAILURE_TITLE,
      GET_WEATHER_FAILURE_BODY);
  }

  public getPreviouslySearchedLocation(): string | undefined {
    return this._previouslySearchedLocation;
  }
}
