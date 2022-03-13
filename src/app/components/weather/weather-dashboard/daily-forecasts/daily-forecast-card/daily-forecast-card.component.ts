import {Component, Input, OnInit} from '@angular/core';
import {DayForecast} from "../../../../../classes/weather/forecast/day-forecast.interface";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {WeatherModalComponent} from "../../../weather-modal/weather-modal.component";

@Component({
  selector: 'app-daily-forecast-card',
  templateUrl: './daily-forecast-card.component.html',
  styleUrls: ['./daily-forecast-card.component.scss']
})
export class DailyForecastCardComponent implements OnInit {
  @Input() dailyForecast: DayForecast | undefined = undefined;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      title: this.getTitle(),
      weather: this.dailyForecast?.weather,
    };

    this.dialog.open(WeatherModalComponent, dialogConfig);
  }

  private getTitle(): string {
    if (this.dailyForecast) {
      const dateString = new Date(this.dailyForecast.date).toLocaleDateString();
      const dayOfWeekString = this.dailyForecast.dayOfWeek
      return `Day Forecast for ${dayOfWeekString} ${dateString}`;

    } else {
      return 'Day Forecast';
    }
  }

}
