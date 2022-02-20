import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WeatherDashboardComponent} from "./components/weather/weather-dashboard/weather-dashboard.component";
import {FeedbackComponent} from "./components/feedback/feedback.component";
import {WeatherSearchComponent} from "./components/old/weather-search/weather-search.component";

const routes: Routes = [
  {
    path: '',
    component: WeatherDashboardComponent,
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
  },
  {
    path: 'search',
    component: WeatherSearchComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
