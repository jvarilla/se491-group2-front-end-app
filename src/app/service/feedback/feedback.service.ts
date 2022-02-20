import {Injectable} from "@angular/core";
import {HttpService} from "../http/http.service";
import {Observable, Subject} from "rxjs";
import {Feedback} from "../../classes/feedback/feedback.interface";
import {UserAuthService} from "../user-auth/user-auth.service";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private feedbackResultSubject: Subject<string> = new Subject<string>();
  public feedbackResult$: Observable<string> = this.feedbackResultSubject.asObservable();

  constructor(private readonly httpService: HttpService,
              private readonly userAuthService: UserAuthService) {}

  public postFeedback(feedback: Feedback): void {
    this.feedbackResultSubject.next('success');
    
  }
}
