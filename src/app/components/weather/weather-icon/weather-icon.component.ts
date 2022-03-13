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
    thunderstorm: '11',
    drizzle: '09',
    rain: '10',
    snow: '13',
    mist: '50',
    smoke: '50',
    haze: '50',
    dust: '50',
    ash: '50',
    squall: '50',
    tornado: '50',
    clear: '01',
    clouds: '02',
  }

  private readonly weatherIconBaseUrl: string;
  weatherIconPath: string = '';
  weatherIconAltText: string = '';

  @Input() weatherDescription: WeatherDescription | undefined;
  @Input() isNight?: boolean = false;
  @Input() multiplier?: '2' | '4' | undefined = undefined;

  constructor() {
    this.weatherIconBaseUrl = environment.weatherIconBaseUrl;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {

    const currentWeatherDescription = changes[`weatherDescription`].currentValue || WeatherDescription.Clear;
    // @ts-ignore
    const iconCode = WeatherIconComponent.imgFileNameMap[currentWeatherDescription.toString().toLowerCase()]
    // @ts-ignore
    || WeatherIconComponent.imgFileNameMap[WeatherDescription.Clear.toString().toLowerCase()];
    const multiplierString = this.multiplier === undefined ? '' : `@${this.multiplier}x`;
    const iconFileName = `${iconCode}${ this.isNight ? 'n': 'd'}${multiplierString}.png`;
    this.weatherIconPath = `${this.weatherIconBaseUrl}${iconFileName}`;
    this.weatherIconAltText = `${currentWeatherDescription.toString()}. `;
  }

}
