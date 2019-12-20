import { ISearchBookingModel, ITripStatus } from './search-booking.model';

export const SEARCHMOCK: ISearchBookingModel[] = [
  { Station: 1, Company: 'Santana', Price: 23000, Availability: [
    { DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "2HQ-421" },
    { DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "3HQ-422" }
  ] },
  { Station: 2, Company: 'Santana', Price: 25000, Availability: [
    { DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "4HQ-421" },
    { DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "5HQ-421" }
  ] },
  { Station: 3, Company: 'Santana', Price: 26000, Availability: [
    { DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "4QQ-421" },
    { DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "7HQ-421" }
  ] },
  { Station: 4, Company: 'Santana', Price: 29000, Availability: [
    { DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "4HQ-521" },
    { DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "5LQ-421" }
  ] },
  { Station: 6, Company: 'Santana', Price: 21000, Availability: [
    { DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "3HQ-421" },
    { DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "5HQ-411" }
  ] },
  { Station: 7, Company: 'Santana', Price: 25000, Availability: [
    { DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "4PQ-421" },
    { DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "5HR-421" }
  ] },
  { Station: 8, Company: 'Santana', Price: 23000, Availability: [
    { DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "4HQ-400" },
    { DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "5HQ-351" }
  ] },
  { Station: 9, Company: 'Santana', Price: 32000, Availability: [
    { DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "48Q-421" },
    { DepartureDate: new Date(), Status: ITripStatus.ON_SALE, VehiclePlaque: "58Q-421" }
  ] }
];
