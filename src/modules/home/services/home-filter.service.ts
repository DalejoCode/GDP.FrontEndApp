import { Injectable } from '@angular/core';
import { HttpRequesterService } from '@services/http-requester.service';
import { environment } from '@envs/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { IMarket } from '../models/market.model';
import { MockMarkets } from '../models/mock-markets';
import { LoggerService } from '@services/logger.service';

@Injectable({
  providedIn: 'root'
})
export class HomeFilterService {
  private marketHomeSubject: BehaviorSubject<MarketServiceResponse>;

  constructor(private httpRequester: HttpRequesterService, private logger: LoggerService) {
    this.marketHomeSubject = new BehaviorSubject<MarketServiceResponse>(null);
  }

  public getAllMarkets(): void {
    this.httpRequester
      .getMethod(environment.api_endpoint_base_url + "GetAllStations")
      .subscribe((response: IMarket[]) => {
        if(response) {
          this.marketHomeSubject.next(new MarketServiceResponse(true, response));
        } else {
          this.marketHomeSubject.next(new MarketServiceResponse(false, []));
        }
      }, (error: any) => {
        this.logger.error(error);
        this.marketHomeSubject.next(new MarketServiceResponse(false, []));
      });
  }

  public getMarketsRx(): Observable<MarketServiceResponse> {
    return this.marketHomeSubject.asObservable();
  }
}

export class MarketServiceResponse {
  constructor(public success: boolean, public markets: IMarket[]) { }
}
