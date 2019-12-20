import { Injectable } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { environment } from '@envs/environment';

@Injectable({
    providedIn: 'root'
})

export class GDPStorageService {
    constructor(private storageManager: SessionStorageService) { }
    public setStorage(key: string, value: any): void{
        this.storageManager.set(key, value, environment.session_duration);
    }

    public getStorage(key: string): any {
        return this.storageManager.get(key);
    }

    public deleteStoragedItem(key: string): void {
      this.storageManager.remove(key);
    }
}
