import {Injectable} from "@angular/core";
import {HttpService} from "../http/http.service";
import {WeatherResult} from "../../classes/weather/weather-result.interface";
import {Observable, of, Subject, take} from "rxjs";
import {API_ROUTES} from "../routes/api-routes";
import {GeolocationService} from "../geolocation/geolocation.service";
import {Coords} from "../../classes/geolocation/coords.interface";
import {BannerService} from "../../components/shared/banner/banner.service";
import {GET_WEATHER_FAILURE_BODY, GET_WEATHER_FAILURE_TITLE} from "../../constants/weather.constants";
import {mockWeatherResult} from "../../mock-data/mock-data";

@Injectable({
  providedIn: 'root'
})
export class MockWeatherService {
  public weatherResult$: Observable<WeatherResult>;

  constructor(private readonly httpService: HttpService,
              private readonly geolocationService: GeolocationService,
              private readonly bannerService: BannerService) {
    this.weatherResult$ = of(mockWeatherResult)
  }

  getWeatherForCurrentLocation() {}

  getWeatherByCityName(cityName: string): void {}

  getWeatherByLocationByZipCode(zipCode: number): void {}

  getWeatherByLocationByCoords(lat: number, long: number): void {}

  public getPreviouslySearchedLocation(): string | undefined {
    return mockWeatherResult.currentLocation.cityName;
  }
}
