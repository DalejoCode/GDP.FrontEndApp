export interface ISearchBookingModel {
  Station: number;
  Company: string;
  Price: number;
  Availability: ISearchAvailable[];
}

export interface ISearchAvailable {
  DepartureDate: Date;
  Status: ITripStatus;
  VehiclePlaque: string;
}

export enum ITripStatus {
  ON_SALE = "En Venta",
  SALED = "Vendido",
  ON_ROAD = "EN Viaje",
  ARRIVED = "LLegó a su destino"
}
