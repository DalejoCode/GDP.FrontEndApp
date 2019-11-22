export interface IUserModel {
  id: number,
  name: string,
  username: string,
  email: string,
  address : IAddress,
  phone: string,
  website: string,
  company: ICompany
}

export interface IAddress {
  street: string,
  suite: string,
  city: string,
  zipcode: number,
  geo: IGeo
}

export interface IGeo {
  lat: number,
  lng: number
}

export interface ICompany {
  name: string,
  catchPhrase: string,
  bs: string
}

export class SendDataModel{
  constructor(public val1: string, public val2: string, public val3: string) { }
}


