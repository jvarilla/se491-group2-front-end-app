import {DayOfWeek} from "./day-of-week.interface";
import {Weather} from "../weather.interface";

export interface HourlyForecast {
  dayOfWeek: DayOfWeek,
  date: string,
  hour: number,
  weather: Weather
}
