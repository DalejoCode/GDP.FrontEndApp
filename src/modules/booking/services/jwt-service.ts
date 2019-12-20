import { JwtHelperService } from "@auth0/angular-jwt";
import { Injectable } from '@angular/core';
import { TokenSessionService } from '@services/token-session.service';
import { IUserInformation } from '@modules/login/models/interfaces/user-information.model';

@Injectable({
  providedIn: 'root'
})

export class GDPJWTService{
  constructor(private jwt: JwtHelperService, private tokenService: TokenSessionService){ }

  public getCurrentUser(): IUserInformation{
    const currentToken = this.tokenService.getStoragedSession();
    return currentToken ? this.jwt.decodeToken(currentToken) : null;
  }
}
