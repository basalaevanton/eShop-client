export interface IUser {
  email: string;
  isActivated: boolean;
  id: number;
}

export interface user {
  firstName: string;
  lastName: string;
  email: string;
}

export interface CreateUser extends user {
  password: string;
}

export interface AccountUser extends user {
  userId: number;
  gender: string;
  birthday: Date;
}
