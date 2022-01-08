import { AccountUser } from "../../../interfaces/user.interface";

export interface AccountDash {
  userAccount: AccountUser;
  // adress:;
  // favorite:;
  // favorite:;
  isLoading: boolean;
  error: string;
}

export enum AccountActionEnum {
  SET_ACC_USER = "SET_ACC_USER",
  SET_ACC_ERROR = "SET_ACC_ERROR",
  SET_ACC_IS_LOADING = "SET_ACC_IS_LOADING",
}

export interface SetUserAction {
  type: AccountActionEnum.SET_ACC_USER;
  payload: AccountUser;
}
export interface SetErrorAction {
  type: AccountActionEnum.SET_ACC_ERROR;
  payload: string;
}

export interface SetIsLoadingAction {
  type: AccountActionEnum.SET_ACC_IS_LOADING;
  payload: boolean;
}

export type AccountAction = SetUserAction | SetErrorAction | SetIsLoadingAction;
