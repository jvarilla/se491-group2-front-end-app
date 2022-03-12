import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {WeatherResult} from "../../../classes/weather/weather-result.interface";
import {Location} from "../../../classes/location/location.interface";
import {WeatherService} from "../../../service/weather/weather.service";
import {User} from "../../../classes/user/user.interface";
import {UserAuthService} from "../../../service/user-auth/user-auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.scss']
})
export class WeatherDashboardComponent implements OnInit, OnDestroy {
  weatherSearchForm: FormGroup;
  weatherResultSubscription: Subscription | undefined;
  weatherResult: WeatherResult | undefined;
  currentLocation: Location | undefined;
  currentUser: User | undefined

  constructor(private readonly fb: FormBuilder,
              private readonly weatherService: WeatherService,
              private readonly userAuthService: UserAuthService) {
    this.weatherSearchForm = this.fb.group({
      location: [null],
    });
  }

  ngOnInit(): void {
    this.weatherResultSubscription =
      this.weatherService.weatherResult$
        .subscribe((weatherResult: WeatherResult) => {
          this.weatherResult = weatherResult;
          this.currentLocation = weatherResult.currentLocation;
        }
      )

    this.weatherService.getWeatherForCurrentLocation();
    this.currentUser = this.userAuthService.getCurrentUser();
  }

  onSubmitWeatherSearch() {
    const locationInput = this.weatherSearchForm.value.location;
    this.weatherSearchForm.reset();
    this.weatherSearchForm.markAsPristine();
    this.searchWeatherForLocation(locationInput);
  }

  searchWeatherForLocation(locationInput: string): void {
    const searchInput = locationInput?.trim()?.toLowerCase();

    const isNumeric = !isNaN(+searchInput);

    if (isNumeric) {
      // If numeric assume it is a zip code
      this.weatherService.getWeatherByLocationByZipCode(+searchInput);
    } else {
      this.weatherService.getWeatherByCityName(searchInput);
    }
  }

  onLocationSelected(location: Location): void {
    this.weatherService.getWeatherByCityName(location.cityName);
  }

  ngOnDestroy() {
    this.weatherResultSubscription?.unsubscribe();
  }

}
