import { IMarket } from './market.model';

export class SearchModel{
  constructor(public origin: number, public destination: IMarket, public departureDate: Date, public pax: number) { }
}
