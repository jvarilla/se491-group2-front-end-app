import {Component, OnDestroy, OnInit} from '@angular/core';
import {BannerService} from "./banner.service";
import {BannerConfig, BannerStatus} from "./banner-config.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, OnDestroy {
  bannerConfigSubscription: Subscription;
  title: string = '';
  body: string = '';
  isError: boolean = true;
  show: boolean = false;

  constructor(private readonly bannerService: BannerService) {
    this.bannerConfigSubscription =
      this.bannerService.bannerConfig$
      .subscribe((bannerConfig: BannerConfig) => {
        this.title = bannerConfig.title;
        this.body = bannerConfig.body;
        this.isError = bannerConfig.status === BannerStatus.Error;
        this.show = true;
      })
  }

  ngOnInit(): void {}

  onCloseBtnClicked(): void {
    this.show = false;
  }

  ngOnDestroy() {
    this.bannerConfigSubscription?.unsubscribe();
  }
}
