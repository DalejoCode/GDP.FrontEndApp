import { UserTypeEnum } from './enums/user-type.enum';

export class User {
  constructor(public Name: string,
    public LastName: string,
    public Password: string,
    public UserType: UserTypeEnum,
    public City: string,
    public Phone: string,
    public Email: string) { }
}
