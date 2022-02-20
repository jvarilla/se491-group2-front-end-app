import {WeatherDescription} from "./weather-description.enum";

export interface Weather {
  temp: number,
  humidity: number,
  windSpeed: number,
  currentClouds: number,
  weatherDescription: WeatherDescription
}
