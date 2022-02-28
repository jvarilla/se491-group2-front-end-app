import { Component, OnInit } from '@angular/core';
import {Feedback} from "../../classes/feedback/feedback.interface";
import {UserAuthService} from "../../service/user-auth/user-auth.service";
import {User} from "../../classes/user/user.interface";
import {FeedbackService} from "../../service/feedback/feedback.service";
import {BannerService} from "../shared/banner/banner.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  private static readonly FEEDBACK_SUCCESS_TITLE = 'Thank you!'
  private static readonly FEEDBACK_SUCCESS_BODY = 'We\'ve received your feedback.'

  private static readonly FEEDBACK_ERROR_TITLE = 'Error'
  private static readonly FEEDBACK_ERROR_BODY = 'We cannot accept your feedback at this time, please try again.'

  feedback: Feedback;

  feedbackForm = this.fb.group({
    rating: [0],
    comments: ['']
  });

  constructor(private readonly userAuthService: UserAuthService,
              private readonly feedbackService: FeedbackService,
              private readonly bannerService: BannerService,
              private fb: FormBuilder) {

    this.feedback = {
      userId: '',
      rating: 0,
      comments: ''
    };

    this.feedbackService.feedbackResult$
      .subscribe(
        {
          next: () => {
            this.bannerService.showSuccessBanner(
              FeedbackComponent.FEEDBACK_SUCCESS_TITLE,
              FeedbackComponent.FEEDBACK_SUCCESS_BODY,
            )
            this.feedbackForm.reset();
          },
          error: () => this.bannerService.showErrorBanner(
            FeedbackComponent.FEEDBACK_ERROR_TITLE,
            FeedbackComponent.FEEDBACK_ERROR_BODY,
          )
        });

    this.feedbackForm.valueChanges.subscribe((data) => {
      console.log('data: ', data);
    })
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
    if (this.feedbackForm.value.rating === undefined) {
      this.bannerService.showErrorBanner(
        'We need your rating',
        'Please indicate your rating in your review');
    } else {
      this.feedbackService.postFeedback(this.feedback);
    }
  }
}
