import { Component, OnInit } from '@angular/core';
import { GDPStorageService } from '@services/storage.service';
import { RedirectService } from '@services/redirect.service';
import { LoggerService } from '@services/logger.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TicketModel, TicketToSave } from './models/ticket.model';
import { environment } from '@envs/environment';
import { BookingService } from './services/booking.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  public ticket: TicketModel;

  private componentSubscriptions: Subscription;

  constructor(private storage: GDPStorageService,
    private redirectService: RedirectService,
    private bookingService: BookingService,
    private logger: LoggerService, private snack: MatSnackBar) { }

  ngOnInit() {
    this.validateTicket();
    this.doSubscriptions();
  }

  private validateTicket(): void {
    const base = this.storage.getStorage(environment.ticket_key);
    if(base) {
      this.ticket = base;
    } else {
      this.redirectService.redirectToSearchPage();
    }
  }

  private doSubscriptions(): void {
    this.componentSubscriptions = new Subscription();
    this.componentSubscriptions.add(this.bookingService.getTicketRx().subscribe(response => {
      if(response && response.success) {
        this.snack.open(response.info, 'Aceptar', {
          duration: 2000,
        });
      this.redirectService.redirectToHomePage();
      } else if(response && !response.success) {
        this.snack.open(response.info, 'Aceptar', {
          duration: 2000,
        });
      }
    }))
  }

  public formatDateForTicket(date: Date): string {
    const parseDate = new Date(date);
    return parseDate.getDate() + "/" + (parseDate.getMonth() + 1) + "/" + parseDate.getFullYear() + " "
      + parseDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  }

  public getTicketPrice(): number {
    return this.ticket.pax * this.ticket.unitPrice;
  }

  public confirmTicket(): void{
    this.bookingService.saveTicket(new TicketToSave(this.ticket.pax, "BUY",
      this.getTicketPrice(), this.ticket.destinationOfferedId, 1));
  }
}
