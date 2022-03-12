import {Component, Input, OnInit} from '@angular/core';
import {HourlyForecast} from "../../../../../classes/weather/forecast/hourly-forecast.interface";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {WeatherModalComponent} from "../../../weather-modal/weather-modal.component";

@Component({
  selector: 'app-hourly-forecast-card',
  templateUrl: './hourly-forecast-card.component.html',
  styleUrls: ['./hourly-forecast-card.component.scss']
})
export class HourlyForecastCardComponent implements OnInit {
  @Input() hourlyForecast: HourlyForecast | undefined;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      title: 'Hourly Forecast for: ',
      weather: this.hourlyForecast?.weather,
    };

    this.dialog.open(WeatherModalComponent, dialogConfig);
  }

}
