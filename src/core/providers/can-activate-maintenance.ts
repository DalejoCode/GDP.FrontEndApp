import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { environment } from '@envs/environment';

@Injectable()
export class CanActivateMaintenance implements CanActivate {

  constructor(private router: Router) { }

  public canActivate(): boolean {
    if(environment.activate_maintenance_mode){
      this.router.navigate(['/site-under-construction']);
      return false;
    } else {
      return true;
    }
  }
}
