import { ISearchBookingModel, ITripStatus } from './search-booking.model';

export const SEARCHMOCK: ISearchBookingModel[] = [
  { Station: 1, Company: 'Santana', Price: 23000, Availability: [
    { Id: 1, DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "2HQ-421" },
    { Id: 2, DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "3HQ-422" }
  ] },
  { Station: 2, Company: 'Santana', Price: 25000, Availability: [
    { Id: 3, DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "4HQ-421" },
    { Id: 4, DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "5HQ-421" }
  ] },
  { Station: 3, Company: 'Santana', Price: 26000, Availability: [
    { Id: 5, DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "4QQ-421" },
    { Id: 6, DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "7HQ-421" }
  ] },
  { Station: 4, Company: 'Santana', Price: 29000, Availability: [
    { Id: 7, DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "4HQ-521" },
    { Id: 8, DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "5LQ-421" }
  ] },
  { Station: 6, Company: 'Santana', Price: 21000, Availability: [
    { Id: 9, DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "3HQ-421" },
    { Id: 10, DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "5HQ-411" }
  ] },
  { Station: 7, Company: 'Santana', Price: 25000, Availability: [
    { Id: 11, DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "4PQ-421" },
    { Id: 12, DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "5HR-421" }
  ] },
  { Station: 8, Company: 'Santana', Price: 23000, Availability: [
    { Id: 13, DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "4HQ-400" },
    { Id: 14, DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "5HQ-351" }
  ] },
  { Station: 9, Company: 'Santana', Price: 32000, Availability: [
    { Id: 15, DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "48Q-421" },
    { Id: 16, DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "58Q-421" }
  ] }
];
