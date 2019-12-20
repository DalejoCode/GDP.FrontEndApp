import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { BookingRoutingModule } from './booking-routing.module';

@NgModule({
  declarations: [BookingComponent, SearchResultComponent],
  imports: [
    CommonModule,
    BookingRoutingModule
  ],
  entryComponents: [BookingComponent]
})
export class BookingModule { }
