import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { TokenSessionService } from '@services/token-session.service';

@Injectable()
export class CanActivateAuth implements CanActivate {

  constructor(private router: Router, private tokenService: TokenSessionService) { }

  public canActivate(): boolean {
    if(this.tokenService.getStoragedSession()){
      return true;
    } else {
      // this.router.navigate(['/feed/login']);
      return true;
    }
  }
}
