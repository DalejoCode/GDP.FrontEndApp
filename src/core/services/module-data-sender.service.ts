import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuleDataSenderService {

  private sendDataSubject: BehaviorSubject<any>;

  constructor() {
    this.sendDataSubject = new BehaviorSubject<any>(null);
  }

  public sendANewValue(value: any): void {
    this.sendDataSubject.next(value);
  }

  public getValuesRx(): Observable<any> {
    return this.sendDataSubject.asObservable();
  }
}
