import {Component, Input, OnInit} from '@angular/core';
import {WeatherReading} from "../../classes/weather/weather-reading.interface";

@Component({
  selector: 'app-weather-reading-card',
  templateUrl: './weather-reading-card.component.html',
  styleUrls: ['./weather-reading-card.component.scss']
})
export class WeatherReadingCardComponent implements OnInit {
  @Input() weatherReading: WeatherReading | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
