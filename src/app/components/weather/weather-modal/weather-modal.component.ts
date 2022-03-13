import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {WeatherModalData} from "../../../classes/weather/modal/weather-modal-data.interface";
import {Weather} from "../../../classes/weather/weather.interface";

@Component({
  selector: 'app-weather-modal',
  templateUrl: './weather-modal.component.html',
  styleUrls: ['./weather-modal.component.scss']
})
export class WeatherModalComponent implements OnInit {
  title: string | undefined;
  weather: Weather | undefined;
  isNight: boolean = false;

  constructor(private dialogRef: MatDialogRef<Component>,
              @Inject(MAT_DIALOG_DATA) data: { weather: WeatherModalData, isNight?: boolean}) {
    this.title = data.weather.title;
    this.weather = data.weather.weather;
    this.isNight = data.isNight || false;
  }

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }
}
