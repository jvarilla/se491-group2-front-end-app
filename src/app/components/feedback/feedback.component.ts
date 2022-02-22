import { Component, OnInit } from '@angular/core';
import {Feedback} from "../../classes/feedback/feedback.interface";
import {UserAuthService} from "../../service/user-auth/user-auth.service";
import {User} from "../../classes/user/user.interface";
import {FeedbackService} from "../../service/feedback/feedback.service";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedback: Feedback;

  constructor(private readonly userAuthService: UserAuthService,
              private readonly feedbackService: FeedbackService) {
    this.feedback = {
      userId: '',
      rating: 0,
      comments: ''
    };
  }

  ngOnInit(): void {
    const currentUser: User | undefined =
      this.userAuthService.getCurrentUser();
    this.feedback.userId = currentUser ? currentUser.userId : '';
  }

  onRatingChange(rating: number): void {
    console.log('rating: ', rating);
    this.feedback.rating = rating;
  }

  onCommentsChange(event: any): void {
    console.log('comments: ', event.target.value);
    this.feedback.comments = event.target.value.toString();
  }

  onSubmitButtonClick(): void {
    console.log('submit: ', this.feedback);
    this.feedbackService.postFeedback(this.feedback);
  }

}
