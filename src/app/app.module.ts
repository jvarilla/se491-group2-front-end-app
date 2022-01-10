import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './components/header/header.component';
import {MaterialModule} from "./shared/material.module";
import {FooterComponent} from "./components/footer/footer.component";
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import { WeatherReadingCardComponent } from './components/weather-reading-card/weather-reading-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WeatherSearchComponent,
    WeatherReadingCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
