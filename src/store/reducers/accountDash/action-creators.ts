import { AppDispatch } from "../../index";
import { AccountUser } from "../../../interfaces/user.interface";
import {
  AccountActionEnum,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserAction,
} from "./types";
import UserService from "../../../services/UserService";
import AuthService from "../../../services/AuthService";
import axios from "axios";

import { API } from "../../../helpers/api";

export const AccountActionCreators = {
  setAccountUser: (user: AccountUser): SetUserAction => ({
    type: AccountActionEnum.SET_ACC_USER,
    payload: user,
  }),
  setAccountIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: AccountActionEnum.SET_ACC_IS_LOADING,
    payload,
  }),
  setAccountError: (payload: string): SetErrorAction => ({
    type: AccountActionEnum.SET_ACC_ERROR,
    payload,
  }),

  fetchUserInfo: (userID: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AccountActionCreators.setAccountIsLoading(true));

      const response = await UserService.fetchUser(userID);

      dispatch(AccountActionCreators.setAccountUser(response.data));
    } catch (e: any) {
      dispatch(
        AccountActionCreators.setAccountError(e.response?.data?.message)
      );
    } finally {
      dispatch(AccountActionCreators.setAccountIsLoading(false));
    }
  },
};
