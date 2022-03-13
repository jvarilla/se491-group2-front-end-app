import {Inject, Injectable} from "@angular/core";
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  private _nativeSessionStorage: Storage;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    this._nativeSessionStorage = (document.defaultView as Window).sessionStorage;
  }

  public saveEntry(key: string, value: string): void {
    this._nativeSessionStorage.setItem(key, value);
  }

  public clearEntry(key: string): void {
    this._nativeSessionStorage.removeItem(key);
  }

  public getEntry(key: string): string | null {
    return this._nativeSessionStorage.getItem(key);
  }
}
