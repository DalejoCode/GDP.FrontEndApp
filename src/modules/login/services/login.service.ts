import { Injectable, OnDestroy } from '@angular/core';
import { HttpRequesterService } from '@services/http-requester.service';
import { LoginViewModel } from '../models/user-login-data';
import { Observable, of } from 'rxjs';
import { environment } from '@envs/environment';
import { IUserInformation } from '../models/interfaces/user-information.model';
import { TokenSessionService } from '@services/token-session.service';
import { User } from '../models/user.model';
import { UserTypeEnum } from '../models/enums/user-type.enum';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnDestroy {
  constructor(private httpRequester: HttpRequesterService, private tokenService: TokenSessionService) { }

  public tryToLogin(userData: LoginViewModel): Observable<boolean> {
    const user = FAKE_USER.find(user => user.Contact.Email === userData.email && user.Password === userData.password);
    return user ? of(true) : of(false);
  }

  public registerNewUser(userData: User): Observable<any> {
    return this.httpRequester.postMethod(environment.api_endpoint_base_url + "register", userData);
  }

  ngOnDestroy() {

  }
}

export const FAKE_USER: IUserInformation[] = [
  { Id: 1, Name: "Andres", LastName: "Marin", Password: "EstaesPass12!", UserType: UserTypeEnum.Admin,
    Contact: { Id: 1, City: "Manizales", Phone: "58712121545", Email: "andres@gmail.com", UserId: 1 }},
  { Id: 2, Name: "Andrea", LastName: "Marin", Password: "EstaesPass12!", UserType: UserTypeEnum.Client,
    Contact: { Id: 2, City: "Manizales", Phone: "58712121545", Email: "andrea@gmail.com", UserId: 2 }}
];
