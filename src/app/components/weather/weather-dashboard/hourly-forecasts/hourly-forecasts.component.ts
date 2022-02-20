import {Component, Input, OnInit} from '@angular/core';
import {HourlyForecast} from "../../../../classes/weather/forecast/hourly-forecast.interface";

@Component({
  selector: 'app-hourly-forecasts',
  templateUrl: './hourly-forecasts.component.html',
  styleUrls: ['./hourly-forecasts.component.scss']
})
export class HourlyForecastsComponent implements OnInit {
  @Input() hourlyForecasts: HourlyForecast[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  private onPrevBtnClicked(): void {}

  private onNextBtnClicked(): void {}

  private onKeyPress(): void {}

  private goToNextForecast(): void {}

  private goToPrevForecast(): void {}

}
