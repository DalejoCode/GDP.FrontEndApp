import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookingService, QueryViewModel } from '@modules/booking/services/booking.service';
import { IMarket } from '@modules/home/models/market.model';
import { GDPStorageService } from '@services/storage.service';
import { environment } from '@envs/environment';
import { SearchModel } from '@modules/home/models/search.model';
import { RedirectService } from '@services/redirect.service';
import { Subscription } from 'rxjs';
import { ISearchBookingModel, ITripStatus, ISearchAvailable } from '@modules/booking/models/search-booking.model';
import { MatCard } from '@angular/material';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit, OnDestroy {

  public searchInfo: SearchModel;
  public searchResults: ISearchBookingModel[];
  public showNoResults: boolean;
  public isLoading: boolean;
  public errorMessage: string;

  private componentSubscriptions: Subscription;

  constructor(private bookingService: BookingService,
    private storage: GDPStorageService,
    private redirectService: RedirectService) { }

  ngOnInit() {
    this.searchResults = [];
    this.showNoResults = false;
    this.isLoading = true;
    this.errorMessage = '';
    this.validateSearch();
    this.doSubscriptions();
  }

  ngOnDestroy() {
    this.componentSubscriptions.unsubscribe();
  }

  private validateSearch(): void {
    const search = this.storage.getStorage(environment.search_key) as SearchModel;
    if(search) {
      this.searchInfo = search
      this.bookingService.getSearchMatches(new QueryViewModel(search.destination.Id, search.departureDate));
    } else {
      this.redirectService.redirectToHomePage();
    }
  }

  private doSubscriptions(): void {
    this.componentSubscriptions = new Subscription();
    this.componentSubscriptions.add(this.bookingService.getBookingRx().subscribe(response => {
      if(response && response.success){
        this.showNoResults = false;
        this.isLoading = false;
        this.searchResults = response.bookingResults;
      } else if(response && !response.success) {
        this.showNoResults = true;
        this.isLoading = false;
        this.searchResults = response.bookingResults;
        this.errorMessage = response.errorMessage;
      }
    }));
  }

  public getHoursToShow(date: Date): string {
    return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  }

  public isButtonDisabled(status: ITripStatus): boolean {
    return status !== ITripStatus.ON_SALE;
  }

  public buyTicket(Company: ISearchBookingModel, ticket: ISearchAvailable): void {

  }

}
