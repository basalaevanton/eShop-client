export interface IUser {
  email: string;
  isActivated: boolean;
  id: string;
}

export interface CreateUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
