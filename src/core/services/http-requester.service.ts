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
    const token = this.tokenService.getStoragedSession();
    const options = HttpOptionsGenerator.SearchWithToken(token);
    return this.httpClient
      .get(url, options)
      .pipe(catchError(HandleError<any>('getMethod', [])));
  }

  public getMethodUsingParameters(url: string, parameterName: string, parameters: any): Observable<any> {
    const token = this.tokenService.getStoragedSession();
    const options = HttpOptionsGenerator.GenerateWithParameters(parameters, parameterName, token);
    return this.httpClient
      .get(url, options)
      .pipe(catchError(HandleError<any>('getMethodUsingParameters', [])));
  }

  public postMethod(url: string, requestBody: any): Observable<any> {
    const token = this.tokenService.getStoragedSession();
    const options = HttpOptionsGenerator.SearchWithToken(token);
    return this.httpClient
      .post(url, requestBody, options)
      .pipe(catchError(HandleError<any>('postMethod', null)));
  }
}
