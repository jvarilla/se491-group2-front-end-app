import {DayOfWeek} from "./day-of-week.interface";
import {Weather} from "../weather.interface";

export interface DayForecast {
  dayOfWeek: DayOfWeek,
  date: string,
  weather: Weather
}
