import {Component, Input, OnInit} from '@angular/core';
import {HourlyForecast} from "../../../../../classes/weather/forecast/hourly-forecast.interface";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {WeatherModalComponent} from "../../../weather-modal/weather-modal.component";
import {MilitaryTimeToHourPipe} from "../../../../../pipes/military-time-to-hour.pipe";

@Component({
  selector: 'app-hourly-forecast-card',
  templateUrl: './hourly-forecast-card.component.html',
  styleUrls: ['./hourly-forecast-card.component.scss']
})
export class HourlyForecastCardComponent implements OnInit {

  @Input() hourlyForecast: HourlyForecast | undefined;
  militaryTimePipe: MilitaryTimeToHourPipe;

  constructor(private dialog: MatDialog) {
    this.militaryTimePipe = new MilitaryTimeToHourPipe();
  }

  ngOnInit(): void {
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      weather: {
        title: this.getTitle(),
        weather: this.hourlyForecast?.weather,
      },
      isNight: this.hourlyForecast !== undefined
        && this.hourlyForecast?.hour !== undefined
        && (this.hourlyForecast.hour < 4 || this.hourlyForecast.hour > 17)
    };

    this.dialog.open(WeatherModalComponent, dialogConfig);
  }

  private getTitle(): string {
    if (this.hourlyForecast) {
      const dateString = new Date(this.hourlyForecast.date).toLocaleDateString();
      const hourString = this.militaryTimePipe.transform(this.hourlyForecast.hour)
      return `Hourly Forecast for ${dateString} ${hourString}`;

    } else {
      return 'Hourly Forecast';
    }
  }

}
