import { Injectable } from '@angular/core';
import { HttpRequesterService } from '@services/http-requester.service';
import { environment } from '@envs/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoggerService } from '@services/logger.service';
import { ISearchBookingModel } from '../models/search-booking.model';
import { TicketToSave } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})

export class BookingService {
  private bookingSubject: BehaviorSubject<BookingResponse>;
  private ticketSubject: BehaviorSubject<TicketResponse>;
  constructor(private httpRequester: HttpRequesterService, private logger: LoggerService) {
    this.bookingSubject = new BehaviorSubject<BookingResponse>(null);
    this.ticketSubject = new BehaviorSubject<TicketResponse>(null);
  }

  public getSearchMatches(query: QueryViewModel) {
     this.httpRequester
      .postMethod(environment.api_endpoint_base_url + "GetAvailability", query)
      .subscribe((response: ISearchBookingModel[]) => {
        if(response && response.length > 0) {
          this.bookingSubject.next(new BookingResponse(true, response));
        } else {
          this.bookingSubject.next(new BookingResponse(false, [], 'No hay viajes para su selección'));
        }
      }, (error: any) => {
        this.logger.error(error);
        this.bookingSubject.next(new BookingResponse(false, [], 'Upps!!!, Al parecer el servidor dejó de funcionar'));
      });
  }

  // "SaveTicket"
  public saveTicket(ticket: TicketToSave): void {
    this.httpRequester.postMethod(environment.api_endpoint_base_url + "SaveTicket", ticket)
      .subscribe((response: ISearchBookingModel[]) => {
        if(response && response.length > 0) {
          this.ticketSubject.next(new TicketResponse(true, response));
        } else {
          this.ticketSubject.next(new TicketResponse(false, [], 'No se pudo guardar su ticket'));
        }
      }, (error: any) => {
        this.logger.error(error);
        this.ticketSubject.next(new TicketResponse(false, [], 'Upps!!!, Al parecer el servidor dejó de funcionar'));
      });
  }

  public getBookingRx(): Observable<BookingResponse> {
    return this.bookingSubject.asObservable();
  }

  public getTicketRx(): Observable<TicketResponse> {
    return this.ticketSubject.asObservable();
  }
}

export class BookingResponse {
  constructor(public success: boolean, public bookingResults: ISearchBookingModel[], public errorMessage?: string) { }
}

export class TicketResponse {
  constructor(public success: boolean, public TicketResult: any, public info?: string) { }
}

export class QueryViewModel {
  constructor(public StationId: number, public DepartureDate: Date) { }
}
