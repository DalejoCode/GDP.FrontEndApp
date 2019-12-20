import { UserTypeEnum } from '../enums/user-type.enum';

export interface IUserInformation {
  Id: number;
  Name: string;
  LastName: string;
  UserType: UserTypeEnum;
  City: string;
  Phone: string;
  Email: string;
}

