import {WeatherResult} from "../classes/weather/weather-result.interface";
import {User} from "../classes/user/user.interface";
import * as weatherResultData from 'src/assets/weather-result.json';
import * as userData from 'src/assets/user.json';

export const mockWeatherResult: WeatherResult =
  {...weatherResultData} as WeatherResult;

export const mockUser: User = {...userData} as User;
