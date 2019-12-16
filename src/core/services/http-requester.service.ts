import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HandleError } from '@handlers/handle-error';

@Injectable({
  providedIn: 'root'
})

export class HttpRequesterService {

  constructor(private httpClient: HttpClient) { }

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

  public loginUser(url: string, userData: any): Observable<string> {
    return this.httpClient
      .post<string>(url, userData)
      .pipe(
        map(response => { return response; }),
        catchError(HandleError<any>('loginMethod', null))
      );
  }
}
