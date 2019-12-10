import { UserTypeEnum } from './enums/user-type.enum';

export class User {
  constructor(public name: string,
    public lastName: string,
    public password: string,
    public userType: UserTypeEnum,
    public contact: UserContact) { }
}

export class UserContact {
  constructor(public city: string, public phone: string, public email: string) { }
}
