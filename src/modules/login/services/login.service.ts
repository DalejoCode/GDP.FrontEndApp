import { Injectable } from '@angular/core';
import { HttpRequesterService } from '@services/http-requester.service';
import { LoginViewModel } from '../models/user-login-data';
import { Observable, of } from 'rxjs';
import { environment } from '@envs/environment';
import { UserInformationModel } from '../models/user-information.model';
import { TokenSessionService } from '@services/token-session.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpRequester: HttpRequesterService, private tokenService: TokenSessionService) { }

  public tryToLogin(userData: LoginViewModel): Observable<boolean> {
    this.httpRequester
      .postMethod(environment.api_endpoint_base_url + "login", userData)
      .subscribe(response => {
        if(response) {
          this.tokenService.setNewSessionStorage(response);
          return of(true);
        }
      });

      return of(false);
  }

  public registerNewUser(userData: UserInformationModel): Observable<boolean> {
    this.httpRequester
      .postMethod(environment.api_endpoint_base_url + "register", userData)
      .subscribe(response => {
        if(response) {
          this.tokenService.setNewSessionStorage(response);
          return of(true);
        }
      });

      return of(false);
  }
}
