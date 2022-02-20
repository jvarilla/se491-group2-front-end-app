import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly apiBaseUrl: string;

  constructor(private readonly httpClient: HttpClient) {
    this.apiBaseUrl = environment.apiBaseUrl;
  }

  get<T>(path: string): Observable<T> {
    return this.httpClient.get<T>(`${this.apiBaseUrl}${path}`);
  }

  post<T>(path: string, data: object): Observable<T> {
    return this.httpClient.post<T>(
      `${this.apiBaseUrl}${path}`,
      data,
    );
  }
}
