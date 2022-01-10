import {Injectable} from "@angular/core";
import {Observable, of, Subject} from "rxjs";
import {WeatherReading} from "../classes/weather/weather-reading.interface";
import {CloudinessLevel} from "../classes/weather/cloudiness-level.enum";

@Injectable({
  providedIn: 'root'
})
export class WeatherReadingService {
  private currentWeatherReadingSubject: Subject<WeatherReading> = new Subject();

  public currentWeatherReadingS = this.currentWeatherReadingSubject.asObservable();

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
}
