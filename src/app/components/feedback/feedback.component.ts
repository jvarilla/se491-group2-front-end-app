import {Component, OnDestroy, OnInit} from '@angular/core';
import {FeedbackService} from "../../service/feedback/feedback.service";
import {BannerService} from "../shared/banner/banner.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {
  FEEDBACK_ERROR_BODY,
  FEEDBACK_ERROR_TITLE,
  FEEDBACK_SUCCESS_BODY,
  FEEDBACK_SUCCESS_TITLE
} from "../../utils/feedback-constants";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit, OnDestroy {
  feedbackForm: FormGroup;
  feedbackSubmitSuccess: Subscription;
  feedbackSubmitFailure: Subscription;

  constructor(private readonly feedbackService: FeedbackService,
              private readonly bannerService: BannerService,
              private fb: FormBuilder) {

    this.feedbackForm = this.fb.group({
      rating: [null, [Validators.required]],
      comments: ['']
    });

    this.feedbackSubmitSuccess =
      this.feedbackService.feedbackSubmitResultSuccess$
        .subscribe(() => this.onSubmitFeedbackSuccess());

    this.feedbackSubmitFailure =
      this.feedbackService.feedbackSubmitResultFailure$
        .subscribe(() => this.onSubmitFeedbackFailure());
  }

  ngOnInit(): void {}

  onSubmitButtonClick(): void {
    this.feedbackService.postFeedback(this.feedbackForm.value);
  }

  onSubmitFeedbackSuccess(): void {
    this.bannerService.showSuccessBanner(
      FEEDBACK_SUCCESS_TITLE,
      FEEDBACK_SUCCESS_BODY,
    )
    this.feedbackForm.reset();
  }

  onSubmitFeedbackFailure(): void {
    this.bannerService.showErrorBanner(
      FEEDBACK_ERROR_TITLE,
      FEEDBACK_ERROR_BODY,
    );
  }

  ngOnDestroy() {
    this.feedbackSubmitSuccess?.unsubscribe();
    this.feedbackSubmitFailure?.unsubscribe();
  }
}
