import { Injectable } from '@angular/core';
import { HttpRequesterService } from '@services/http-requester.service';
import { LoginViewModel } from '../models/user-login-data';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '@envs/environment';
import { TokenSessionService } from '@services/token-session.service';
import { User } from '../models/user.model';
import { LoggerService } from '@services/logger.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userLoginSubject: BehaviorSubject<LoginServiceResponse>;
  private userRegisterSubject: BehaviorSubject<LoginServiceResponse>;

  constructor(private httpRequester: HttpRequesterService, private tokenService: TokenSessionService, private logger: LoggerService) {
    this.userLoginSubject = new BehaviorSubject<LoginServiceResponse>(null);
    this.userRegisterSubject = new BehaviorSubject<LoginServiceResponse>(null);
  }

  public tryToLogin(userData: LoginViewModel): void {
    this.httpRequester
      .loginUser(environment.api_endpoint_base_url + "Login", userData)
      .subscribe((response: string) => {
        if(response) {
          this.tokenService.setNewSessionStorage(response);
          this.userLoginSubject.next(new LoginServiceResponse(true, 'Inicio de Sesión Exitoso!!!'));
        } else {
          this.userLoginSubject.next(new LoginServiceResponse(false, 'Credenciales erroneas para ' + userData.Email));
        }
      }, (error: any) => {
        this.logger.error(error);
        this.userLoginSubject.next(new LoginServiceResponse(false, 'Error al intentar iniciar con el usuario ' + userData.Email));
      });
  }

  public registerNewUser(userData: User): void{
    this.httpRequester
      .postMethod(environment.api_endpoint_base_url + "SaveUser", userData)
      .subscribe(response => {
        if(response) {
          this.userRegisterSubject.next(new LoginServiceResponse(true, 'El usuario ' + userData.Email + " fue creado!!"));
        } else {
          this.userRegisterSubject.next(new LoginServiceResponse(false, 'Ocurrio un error mientras se registraba el usuario'));
        }
      }, (error: any) => {
        this.logger.error(error);
        this.userRegisterSubject.next(new LoginServiceResponse(false, 'Ocurrio un error mientras se registraba el usuario'));
      });
  }

  public getUserLoginRx(): Observable<LoginServiceResponse> {
    return this.userLoginSubject.asObservable();
  }

  public getUserRegisterRx(): Observable<LoginServiceResponse> {
    return this.userRegisterSubject.asObservable();
  }
}

export class LoginServiceResponse {
  constructor(public success: boolean, public message: string) { }
}
