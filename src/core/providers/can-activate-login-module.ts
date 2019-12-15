import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router';
import { TokenSessionService } from '@services/token-session.service';
import { RedirectService } from '@services/redirect.service';

@Injectable()
export class CanActivateLoginModule implements CanActivate {

  constructor(private tokenService: TokenSessionService, private redirectService: RedirectService) { }

  public canActivate(): boolean {
    if(this.tokenService.getStoragedSession()){
      this.redirectService.redirectToHomePage()
      return false;
    } else {
      return true;
    }
  }
}
