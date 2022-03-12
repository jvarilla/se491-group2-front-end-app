import {Inject, Injectable} from "@angular/core";
import {DOCUMENT} from "@angular/common";
import {Observable, Subject} from "rxjs";
import {Coords} from "../../classes/geolocation/coords.interface";

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  private _nativeGeoLocationService: Geolocation;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    this._nativeGeoLocationService = (document.defaultView as Window).navigator.geolocation
  }

  getCurrentCoords(): Observable<Coords> {
    const result = new Subject<Coords>();

    this._nativeGeoLocationService.getCurrentPosition((position) => {
      let { latitude, longitude } = position.coords;
      result.next({ latitude, longitude } as Coords);
      result.complete();
    });

    return result.asObservable()
  }
}
