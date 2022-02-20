import {Component, Input, OnInit} from '@angular/core';
import {DayForecast} from "../../../../classes/weather/forecast/day-forecast.interface";

@Component({
  selector: 'app-daily-forecasts',
  templateUrl: './daily-forecasts.component.html',
  styleUrls: ['./daily-forecasts.component.scss']
})
export class DailyForecastsComponent implements OnInit {
  @Input() dailyForecasts: DayForecast[] | undefined = [];

  constructor() { }

  ngOnInit(): void {
  }

  private onPrevBtnClicked(): void {}

  private onNextBtnClicked(): void {}

  private onKeyPress(): void {}

  private goToNextForecast(): void {}

  private goToPrevForecast(): void {}

}
