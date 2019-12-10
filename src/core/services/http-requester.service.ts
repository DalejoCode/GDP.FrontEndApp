import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HandleError } from '@handlers/handle-error';
import { HttpOptionsGenerator } from '@helpers/options-generator';
import { TokenSessionService } from '@services/token-session.service';

@Injectable({
  providedIn: 'root'
})

export class HttpRequesterService {

  constructor(private httpClient: HttpClient, private tokenService: TokenSessionService) { }

  public getMethod(url: string): Observable<any> {
    return this.httpClient
      .get(url)
      .pipe(catchError(HandleError<any>('getMethod', null)));
  }

  public postMethod(url: string, requestBody: any): Observable<any> {
    return this.httpClient
      .post(url, requestBody)
      .pipe(catchError(HandleError<any>('postMethod', null)));
  }
}
