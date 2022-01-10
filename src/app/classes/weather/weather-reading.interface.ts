import { CloudinessLevel } from "./cloudiness-level.enum";

export interface WeatherReading {
  temperature: number;
  precipitation: number;
  pressure: number;
  humidity: number;
  windSpeed: number;
  cloudiness: CloudinessLevel;
}
