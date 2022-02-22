import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {WeatherResult} from "../../../classes/weather/weather-result.interface";
import {Location} from "../../../classes/location/location.interface";
import {WeatherService} from "../../../service/weather/weather.service";
import {User} from "../../../classes/user/user.interface";
import {UserAuthService} from "../../../service/user-auth/user-auth.service";

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.scss']
})
export class WeatherDashboardComponent implements OnInit, OnDestroy {
  weatherResultSubscription: Subscription | undefined;
  weatherResult: WeatherResult | undefined;
  currentLocation: Location | undefined;
  currentUser: User | undefined

  constructor(private readonly weatherService: WeatherService,
              private readonly userAuthService: UserAuthService) { }

  ngOnInit(): void {
    this.weatherResultSubscription =
      this.weatherService.weatherResult$
        .subscribe((weatherResult: WeatherResult) => {
          this.weatherResult = weatherResult;
          this.currentLocation = weatherResult.currentLocation;
          console.log('weather result: ', weatherResult);
        }
      )

    this.weatherService.getWeatherByLocation({} as Location);
    this.currentUser = this.userAuthService.getCurrentUser();
  }

  private onViewedLocationSelected(location: Location): void {}

  private onSearchLocationButtonClicked(): void {}

  private getWeatherForLocation(location: Location): void {}


  ngOnDestroy() {
    this.weatherResultSubscription?.unsubscribe();
  }

}
