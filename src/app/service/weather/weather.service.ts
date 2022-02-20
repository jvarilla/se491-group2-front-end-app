import {Injectable} from "@angular/core";
import {HttpService} from "../http/http.service";
import {WeatherResult} from "../../classes/weather/weather-result.interface";
import {Observable, Subject} from "rxjs";
import {Location} from "../../classes/location/location.interface";
import {mockWeatherResult} from "../../mock-data/mock-data";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weatherResultSubject: Subject<WeatherResult> = new Subject<WeatherResult>();
  public weatherResult$: Observable<WeatherResult> = this.weatherResultSubject.asObservable();

  constructor(private readonly httpService: HttpService) {}

  public getWeatherByLocation(location: Location): void {
    this.weatherResultSubject.next(mockWeatherResult);
  }

  private getWeatherByCityName(cityName: string): void {}

  private getWeatherByLocationByZipCode(zipCode: string): void {}

  private getWeatherByLocationByCoords(latitiude: number, longitude: number): void {}
}
