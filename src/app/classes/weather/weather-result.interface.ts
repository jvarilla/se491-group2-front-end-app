import {Location} from "../location/location.interface";
import {Weather} from "./weather.interface";
import {DayForecast} from "./forecast/day-forecast.interface";
import {HourlyForecast} from "./forecast/hourly-forecast.interface";
import {Precaution} from "./precaution/precaution.interface";
import {WeatherAlert} from "./alert/weather-alert.interface";

export interface WeatherResult {
  generatedTimeStamp: string,
  currentLocation: Location,
  currentConditions: Weather,
  tomorrowForecast: DayForecast,
  dayForecasts: DayForecast[],
  hourlyForecast: HourlyForecast[],
  precaution: Precaution,
  alert: WeatherAlert,
}
