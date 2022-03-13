import {Injectable} from "@angular/core";
import {BannerConfig, BannerStatus} from "./banner-config.interface";
import {filter, Subject} from "rxjs";
import {NavigationEnd, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private bannerConfigSubject = new Subject<BannerConfig>();
  public bannerConfig$ = this.bannerConfigSubject.asObservable();

  private bannerCloseSubject = new Subject<void>();
  public bannerClose$ = this.bannerCloseSubject.asObservable();

  constructor(private readonly router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeBanners();
    });
  }

  showSuccessBanner(title: string, body: string): void {
    this.bannerConfigSubject.next({
      title,
      body,
      status: BannerStatus.Success
    } as BannerConfig);
  }

  showErrorBanner(title: string, body: string): void {
    this.bannerConfigSubject.next({
      title,
      body,
      status: BannerStatus.Error
    } as BannerConfig);
  }

  closeBanners(): void {
    this.bannerCloseSubject.next();
  }
}
