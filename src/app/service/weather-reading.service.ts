import {Injectable} from "@angular/core";
import {Subject, take} from "rxjs";
import {WeatherReading} from "../classes/weather/weather-reading.interface";
import {HttpService} from "./http/http.service";
import {API_ROUTES} from "./routes/api-routes";

@Injectable({
  providedIn: 'root'
})
export class WeatherReadingService {
  private currentWeatherReadingSubject: Subject<WeatherReading> = new Subject();
  public currentWeatherReadingS = this.currentWeatherReadingSubject.asObservable();

  private weatherReadingByCitySubject: Subject<WeatherReading> = new Subject();
  public weatherReadingByCity$ = this.weatherReadingByCitySubject.asObservable();

  constructor(private readonly httpService: HttpService) {}

  getCurrentWeatherReading(location: string): void {
    const exampleWeatherReading = {
      location: 'Somewhere',
      temperature: 32.0,
      humidity: 0.80,
    } as WeatherReading;

    this.currentWeatherReadingSubject
      .next(exampleWeatherReading)
  }

  getTestGreeting() {
    this.httpService.get(API_ROUTES.DATA.GET())
      .pipe(take(1))
      .subscribe(msg => console.log(msg));
  }

  getWeatherReadingByCity(city: string): void {
    this.httpService.get<WeatherReading>(
      API_ROUTES.WEATHER.GET_BY_CITY(city))
      .pipe(take(1))
      .subscribe(weatherReading => {
        this.weatherReadingByCitySubject.next(weatherReading);
      });
  }
}
