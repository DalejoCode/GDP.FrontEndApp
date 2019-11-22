import { Inject, Injectable } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { environment } from '@envs/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenSessionService {

  constructor(private storageManager: SessionStorageService) { }

  public getStoragedSession(): string {
    return this.storageManager.get(environment.session_key) as string;
  }

  public setNewSessionStorage(newToken: string): void {
    if(newToken) {
      this.storageManager.set(environment.session_key, newToken, environment.session_duration);
    } else {
      console.error("Invalid Token", newToken);
    }
  }
}
