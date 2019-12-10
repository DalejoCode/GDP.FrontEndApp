import { UserTypeEnum } from '../enums/user-type.enum';

export class IUserInformation {
  Id: number;
  Name: string;
  LastName: string;
  Password: string;
  UserType: UserTypeEnum;
  Contact: IContact;
}

export class IContact {
  Id: number;
  City: string;
  Phone: string;
  Email: string;
  UserId: number;
}

