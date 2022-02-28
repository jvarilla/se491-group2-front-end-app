export interface BannerConfig {
  title: string;
  body: string;
  status: BannerStatus;
}

export enum BannerStatus {
  Success,
  Error,
}
