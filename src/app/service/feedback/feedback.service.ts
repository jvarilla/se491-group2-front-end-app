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
  private feedbackResultSubject: Subject<string> = new Subject<string>();
  public feedbackResult$: Observable<string> = this.feedbackResultSubject.asObservable();

  constructor(private readonly httpService: HttpService,
              private readonly userAuthService: UserAuthService) {}

  public postFeedback(feedback: Feedback): void {
    console.log('feedback service: ', feedback);
    this.httpService
      .post<Feedback>(API_ROUTES.FEEDBACK.POST(), feedback)
      .pipe(take(1))
      .subscribe({
        next: () => this.feedbackResultSubject.next('success'),
        error: () => this.feedbackResultSubject.error('success'),
      });
  }
}
