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

  constructor(private dialogRef: MatDialogRef<Component>,
              @Inject(MAT_DIALOG_DATA) data: WeatherModalData) {
    this.title = data.title;
    this.weather = data.weather;
  }

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }
}
