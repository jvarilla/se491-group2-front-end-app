import {Component, OnInit} from '@angular/core';
import {UserAuthService} from "./service/user-auth/user-auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'se491-group2-app';

  constructor(private readonly userAuthService: UserAuthService) {}


  ngOnInit() {
    this.userAuthService.login('', '');
  }
}
