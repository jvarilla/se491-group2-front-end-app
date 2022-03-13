import {Injectable} from "@angular/core";
import {HttpService} from "../http/http.service";
import {Observable, Subject, take} from "rxjs";
import {Feedback} from "../../classes/feedback/feedback.interface";
import {UserAuthService} from "../user-auth/user-auth.service";
import {API_ROUTES} from "../routes/api-routes";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private feedbackSubmitSuccess: Subject<void> = new Subject<void>();
  public feedbackSubmitResultSuccess$: Observable<void> =
    this.feedbackSubmitSuccess.asObservable();

  private feedbackSubmitFailure: Subject<any> = new Subject<any>();
  public feedbackSubmitResultFailure$: Observable<any> =
    this.feedbackSubmitFailure.asObservable();

  constructor(private readonly httpService: HttpService,
              private readonly userAuthService: UserAuthService) {}

  public postFeedback(feedback: Feedback): void {
    feedback.userName = this.userAuthService.getCurrentUser()?.userName || '';

    this.httpService
      .post<Feedback>(API_ROUTES.FEEDBACK.POST(), feedback)
      .pipe(take(1))
      .subscribe({
        next: () => this.feedbackSubmitSuccess.next(),
        error: (err) => this.feedbackSubmitFailure.next(err),
      });
  }
}
