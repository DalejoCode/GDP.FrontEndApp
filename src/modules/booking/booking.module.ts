import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { SearchResultComponent } from './components/search-result/search-result.component';

@NgModule({
  declarations: [BookingComponent, SearchResultComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [BookingComponent]
})
export class BookingModule { }
