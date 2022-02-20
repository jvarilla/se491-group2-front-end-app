import {Component, OnInit} from '@angular/core';
import {WeatherReadingService} from "../../../service/weather-reading.service";
import {Subscription} from "rxjs";
import {WeatherReading} from "../../../classes/weather/old/weather-reading.interface";

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']
})
export class WeatherSearchComponent implements OnInit {
  private currentWeatherReadingSubscription: Subscription | undefined;
  currentWeatherReading: WeatherReading | undefined;

  constructor(private weatherReadingService: WeatherReadingService) { }

  ngOnInit(): void {
    this.currentWeatherReadingSubscription = this.weatherReadingService.currentWeatherReadingS.subscribe((weatherReading) => {
      this.currentWeatherReading = weatherReading;
    });

    this.weatherReadingService.getCurrentWeatherReading('');
  }

  ngOnDestroy(): void {
    this.currentWeatherReadingSubscription?.unsubscribe();
  }

  getGreeting(): void {
    this.weatherReadingService.getTestGreeting();
  }

  getWeatherByCity(event: any, input: HTMLInputElement) {
    console.log(event);
    const city = input.value.toString().toLowerCase().trim();
    console.log('city: ', city);
    this.weatherReadingService.getWeatherReadingByCity(city);
  }

}
