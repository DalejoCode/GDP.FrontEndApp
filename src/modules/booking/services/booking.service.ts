import { Injectable } from '@angular/core';
import { HttpRequesterService } from '@services/http-requester.service';
import { environment } from '@envs/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoggerService } from '@services/logger.service';
import { ISearchBookingModel, ISearchAvailable } from '../models/search-booking.model';
import { SEARCHMOCK } from '../models/search-mock';
import { DateValidatorHelper, CompareResultEnum } from '@helpers/date-validator.helper';

@Injectable({
  providedIn: 'root'
})

export class BookingService {
  private bookingSubject: BehaviorSubject<BookingResponse>;
  constructor(private httpRequester: HttpRequesterService, private logger: LoggerService) {
    this.bookingSubject = new BehaviorSubject<BookingResponse>(null);
  }

  public getSearchMatches(query: QueryViewModel) {
    //  this.httpRequester
    //   .postMethod(environment.api_endpoint_base_url + "GetAvailability", query)
    //   .subscribe((response: ISearchBookingModel[]) => {
    //     if(response && response.length > 0) {
    //       this.bookingSubject.next(new BookingResponse(true, response));
    //     } else {
    //       this.bookingSubject.next(new BookingResponse(false, [], 'No hay viajes para su selección'));
    //     }
    //   }, (error: any) => {
    //     this.logger.error(error);
    //     this.bookingSubject.next(new BookingResponse(false, [], 'Upps!!!, Al parecer el servidor dejó de funcionar'));
    //   });

    const availability: ISearchBookingModel[] = [];
    SEARCHMOCK.forEach(search => {
      let currentSearch : ISearchBookingModel = null;
      const availables: ISearchAvailable[] = [];
      if(search.Station === query.StationId) {
        currentSearch = search;
        search.Availability.forEach(results => {
          if(DateValidatorHelper.compareTwoDates(query.DepartureDate, results.DepartureDate) === CompareResultEnum.EQUAL) {
            availables.push(results);
          }
        });
      }

      if(currentSearch && availables.length > 0){
        currentSearch.Availability = availables;
        availability.push(currentSearch);
      }
    });

    if(availability.length > 0){
      this.bookingSubject.next(new BookingResponse(true, availability));
    } else {
      this.bookingSubject.next(new BookingResponse(false, availability, 'No hay vuelos disponibles para su Selección'));
    }
  }

  public getBookingRx(): Observable<BookingResponse> {
    return this.bookingSubject.asObservable();
  }
}

export class BookingResponse {
  constructor(public success: boolean, public bookingResults: ISearchBookingModel[], public errorMessage?: string) { }
}

export class QueryViewModel {
  constructor(public StationId: number, public DepartureDate: Date) { }
}
