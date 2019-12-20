import { IMarket } from '@modules/home/models/market.model';

export class TicketModel {
  constructor(public destination: IMarket,
    public company: string,
    public departureDate: Date,
    public destinationOfferedId: number,
    public unitPrice: number,
    public plaque: string,
    public pax: number){ }
}

export class TicketToSave {
  constructor(public pax: number,
    public status: string,
    public ticketPrices: number,
    public vehicleDeparture: number,
    public userId: number){ }
}
