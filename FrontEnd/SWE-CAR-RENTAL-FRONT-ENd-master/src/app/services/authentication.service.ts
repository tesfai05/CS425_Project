import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, throwError} from "rxjs";
import {TokenService} from "./token.service";
import {StorageMap} from "@ngx-pwa/local-storage";
import {catchError, map, tap} from "rxjs/operators";
import {Credentials} from "../models/credentials.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private static readonly CREDENTIALS = 'CREDENTIALS';

  constructor(private _http: HttpClient,
              private _tokenService: TokenService,
              private _storage: StorageMap) { }

  public login(credentials: Credentials){
    return this._http
      .post(
        environment.API_ENDPOINT + 'public/login/users',
        {
          ...credentials
        },
        {
          responseType: 'json'
        })
      .pipe(
        tap((response: any) => {
          this._tokenService.saveToken(response.extraData.access_token);
        }),
        map(() => true),
        catchError(
          () => {
            return throwError(false);
          })
      );
  }

  public logout(): void {
    this._tokenService.destroyToken();
    this._destroyCredentials();
  }

  public saveCredentials(username: string, password: string): void {
    this._storage
      .set(
        AuthenticationService.CREDENTIALS,
        JSON.stringify({ username, password })
      );
  }

  public getCredentials(): Observable<any> {
    return this._storage.get(AuthenticationService.CREDENTIALS);
  }

  private _destroyCredentials(): void {
    this._storage.delete(AuthenticationService.CREDENTIALS);
  }

  public isLoggedIn(): Observable<boolean>{
    return this._tokenService.token$.pipe(map((i) => !!i));
  }

}
