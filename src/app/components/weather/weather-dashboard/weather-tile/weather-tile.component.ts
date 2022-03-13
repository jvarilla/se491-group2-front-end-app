import {Component, Input, OnInit} from '@angular/core';
import {Weather} from "../../../../classes/weather/weather.interface";

@Component({
  selector: 'app-weather-tile',
  templateUrl: './weather-tile.component.html',
  styleUrls: ['./weather-tile.component.scss']
})
export class WeatherTileComponent implements OnInit {
  @Input() label: string | undefined;
  @Input() weather: Weather | undefined;
  @Input() showNightMode?: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
