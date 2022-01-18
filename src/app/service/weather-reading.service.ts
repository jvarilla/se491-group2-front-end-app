import {Injectable} from "@angular/core";
import {Subject, take} from "rxjs";
import {WeatherReading} from "../classes/weather/weather-reading.interface";
import {CloudinessLevel} from "../classes/weather/cloudiness-level.enum";
import {HttpService} from "./http/http.service";
import {API_ROUTES} from "./routes/api-routes";

@Injectable({
  providedIn: 'root'
})
export class WeatherReadingService {
  private currentWeatherReadingSubject: Subject<WeatherReading> = new Subject();
  public currentWeatherReadingS = this.currentWeatherReadingSubject.asObservable();

  constructor(private readonly httpService: HttpService) {}

  getCurrentWeatherReading(location: string): void {
    const exampleWeatherReading = {
      temperature: 32.0,
      precipitation: 0.50,
      humidity: 0.80,
      cloudiness: CloudinessLevel.Cloudy,
    } as WeatherReading;

    this.currentWeatherReadingSubject
      .next(exampleWeatherReading)
  }

  getTestGreeting() {
    this.httpService.get(API_ROUTES.DATA.GET())
      .pipe(take(1))
      .subscribe(msg => console.log(msg));
  }
}
