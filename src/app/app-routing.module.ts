import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WeatherDashboardComponent} from "./components/weather/weather-dashboard/weather-dashboard.component";
import {FeedbackComponent} from "./components/feedback/feedback.component";
import {WeatherSearchComponent} from "./components/old/weather-search/weather-search.component";
import {LoginComponent} from "./components/login/login.component";
import {AuthGuard} from "./guard/auth.guard";
import {UnauthGuard} from "./guard/unauth.guard";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canDeactivate: [UnauthGuard]
  },
  {
    path: 'weather',
    component: WeatherDashboardComponent,
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'search',
    component: WeatherSearchComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canDeactivate: [UnauthGuard]
  },
  {
    path: '**',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
