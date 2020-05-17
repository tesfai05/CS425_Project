import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StorageMap} from '@ngx-pwa/local-storage';
import {Observable, ReplaySubject} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  public static readonly TOKEN_KEY = 'TOKEN';
  // emits old values to any new subscribers in addition to emitting new values to existing subscribers.
  private _token: ReplaySubject<string> = new ReplaySubject<string>(1);
  public readonly token$: Observable<string> = this._token.asObservable();

  constructor(private _http: HttpClient,
              private _storage: StorageMap) {
    this._storage
      .get(TokenService.TOKEN_KEY)
      .subscribe(
        (token: string) => {
          this._token.next(token);
        });
  }

  public saveToken(token: string): Observable<string> | null {
    if (!token) {
      return null;
    }
    return this._storage.set(TokenService.TOKEN_KEY, token)
      .pipe(
        map(() => {
          return token;
        }),
        tap(
          () => {
            this._token.next(token);
          }
        ));
  }

  public destroyToken() {
    this._storage
      .delete(TokenService.TOKEN_KEY)
      .subscribe(() => {
        this._token.next(null);
      });
  }
}
