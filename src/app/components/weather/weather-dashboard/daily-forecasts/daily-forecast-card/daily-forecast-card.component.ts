import {Component, Input, OnInit} from '@angular/core';
import {DayForecast} from "../../../../../classes/weather/forecast/day-forecast.interface";

@Component({
  selector: 'app-daily-forecast-card',
  templateUrl: './daily-forecast-card.component.html',
  styleUrls: ['./daily-forecast-card.component.scss']
})
export class DailyForecastCardComponent implements OnInit {
  @Input() dailyForecast: DayForecast | undefined = undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
