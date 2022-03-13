import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./shared/material.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {HttpClientModule} from "@angular/common/http";
import { WeatherDashboardComponent } from './components/weather/weather-dashboard/weather-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import {HeaderComponent} from "./components/base/header/header.component";
import {FooterComponent} from "./components/base/footer/footer.component";
import { ViewedLocationsComponent } from './components/weather/weather-dashboard/viewed-locations/viewed-locations.component';
import { LocationCardComponent } from './components/weather/weather-dashboard/viewed-locations/location-card/location-card.component';
import { HourlyForecastsComponent } from './components/weather/weather-dashboard/hourly-forecasts/hourly-forecasts.component';
import { HourlyForecastCardComponent } from './components/weather/weather-dashboard/hourly-forecasts/hourly-forecast-card/hourly-forecast-card.component';
import { WeatherTileComponent } from './components/weather/weather-dashboard/weather-tile/weather-tile.component';
import { DailyForecastsComponent } from './components/weather/weather-dashboard/daily-forecasts/daily-forecasts.component';
import { DailyForecastCardComponent } from './components/weather/weather-dashboard/daily-forecasts/daily-forecast-card/daily-forecast-card.component';
import { WeatherAlertComponent } from './components/weather/weather-dashboard/weather-alert/weather-alert.component';
import { PrecautionComponent } from './components/weather/weather-dashboard/precaution/precaution.component';
import { RatingComponent } from './components/feedback/rating/rating.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { BannerComponent } from './components/shared/banner/banner.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {WeatherService} from "./service/weather/weather.service";
import {MockWeatherService} from "./service/weather/mock-weather.service";
import {MilitaryTimeToHourPipe} from "./pipes/military-time-to-hour.pipe";
import {FahrenheitPipe} from "./pipes/fahrenheit.pipe";
import { WeatherModalComponent } from './components/weather/weather-modal/weather-modal.component';
import { WeatherIconComponent } from './components/weather/weather-icon/weather-icon.component';
import {HumidityPipe} from "./pipes/humidity.pipe";
import {MPHPipe} from "./pipes/mph.pipe";
import {CloudinessLevelPipe} from "./pipes/cloudiness-level.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WeatherDashboardComponent,
    LoginComponent,
    FeedbackComponent,
    ViewedLocationsComponent,
    LocationCardComponent,
    HourlyForecastsComponent,
    HourlyForecastCardComponent,
    WeatherTileComponent,
    DailyForecastsComponent,
    DailyForecastCardComponent,
    WeatherAlertComponent,
    PrecautionComponent,
    RatingComponent,
    BannerComponent,
    MilitaryTimeToHourPipe,
    CloudinessLevelPipe,
    FahrenheitPipe,
    HumidityPipe,
    MPHPipe,
    WeatherModalComponent,
    WeatherIconComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatFormFieldModule,
    HttpClientModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  // providers: [{ provide: WeatherService, useClass: MockWeatherService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
