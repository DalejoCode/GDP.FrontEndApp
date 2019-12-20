import { Injectable } from '@angular/core';
import { HttpRequesterService } from '@services/http-requester.service';
import { environment } from '@envs/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoggerService } from '@services/logger.service';

@Injectable({
  providedIn: 'root'
})

export class BookingService {
  private bookingSubject: BehaviorSubject<BookingResponse>;
  constructor(private httpRequester: HttpRequesterService) {
    this.bookingSubject = new BehaviorSubject<BookingResponse>(null);
  }

  public getBookingRx(): Observable<BookingResponse> {
    return this.bookingSubject.asObservable();
  }
}

export class BookingResponse {
  constructor(public success: boolean, public bookingResults: any) { }
}
