import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SendDataModel } from '@modules/home/models/user-model';

@Injectable({
  providedIn: 'root'
})
export class ModuleDataSenderService {

  private sendDataSubject: BehaviorSubject<SendDataModel>;

  constructor() {
    this.sendDataSubject = new BehaviorSubject<SendDataModel>(null);
  }

  public sendANewValue(value: SendDataModel): void {
    this.sendDataSubject.next(value);
  }

  public getValuesRx(): Observable<SendDataModel> {
    return this.sendDataSubject.asObservable();
  }
}
