import { Component, OnInit } from '@angular/core';
import {UserAuthService} from "../../../../service/user-auth/user-auth.service";

@Component({
  selector: 'app-welcome-display',
  templateUrl: './welcome-display.component.html',
  styleUrls: ['./welcome-display.component.scss']
})
export class WelcomeDisplayComponent implements OnInit {
  date: Date = new Date();
  firstName: string;
  lastName: string;

  constructor(private readonly userAuthService: UserAuthService) {
    const currentUser = this.userAuthService.getCurrentUser();
    this.firstName = currentUser?.firstName || '';
    this.lastName = currentUser?.lastName || '';

    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }

  ngOnInit(): void {
  }

}
