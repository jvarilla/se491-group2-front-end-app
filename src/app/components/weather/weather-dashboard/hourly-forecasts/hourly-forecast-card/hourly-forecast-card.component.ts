import {Component, Input, OnInit} from '@angular/core';
import {HourlyForecast} from "../../../../../classes/weather/forecast/hourly-forecast.interface";

@Component({
  selector: 'app-hourly-forecast-card',
  templateUrl: './hourly-forecast-card.component.html',
  styleUrls: ['./hourly-forecast-card.component.scss']
})
export class HourlyForecastCardComponent implements OnInit {
  @Input() hourlyForecast: HourlyForecast | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  openModal() {}

}
