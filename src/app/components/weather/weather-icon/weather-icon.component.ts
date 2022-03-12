import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {WeatherDescription} from "../../../classes/weather/weather-description.enum";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.scss']
})
export class WeatherIconComponent implements OnInit, OnChanges {
  private static readonly imgFileNameMap: object =  {
    thunderstorm: '11d.png',
    drizzle: '09d.png',
    // Drizzle = 'drizzle',
    // Rain = 'rain',
    // Snow = 'snow',
    snow: '13d.png',
    // Mist = 'mist',
    // Smoke = 'smoke',
    // Haze = 'haze',
    // Dust = 'dust',
    // Ash = 'ash',
    // Squall = 'squall',
    // Tornado = 'tornado',
    // Clear = 'clear',
    clear: '01d.png'
    // Clouds = 'clouds'
  }
  private readonly weatherIconBaseUrl: string;
  weatherIconPath: string = '';

  @Input() weatherDescription: WeatherDescription | undefined;

  constructor() {
    this.weatherIconBaseUrl = environment.weatherIconBaseUrl;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {

    const currentWeatherDescription = changes[`weatherDescription`].currentValue || WeatherDescription.Clear;
    // @ts-ignore
    const iconFileName = WeatherIconComponent.imgFileNameMap[currentWeatherDescription.toString().toLowerCase()]
    // @ts-ignore
    || WeatherIconComponent.imgFileNameMap[WeatherDescription.Clear.toString().toLowerCase()];
    console.log(currentWeatherDescription);
    this.weatherIconPath = `${this.weatherIconBaseUrl}${iconFileName}`
  }

}
