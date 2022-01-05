import { AppDispatch } from "../../index";
import { IUser } from "../../../interfaces/user.interface";
import {
  AuthActionEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserAction,
} from "./types";
import UserService from "../../../services/UserService";
import AuthService from "../../../services/AuthService";
import axios from "axios";
import { AuthResponse } from "../../../interfaces/authResponse";
import { API } from "../../../helpers/api";

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user,
  }),
  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload: auth,
  }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload,
  }),
  setError: (payload: string): SetErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload,
  }),
  login: (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));
      const response = await AuthService.login(email, password);
      localStorage.setItem("token", response.data.accessToken);

      dispatch(AuthActionCreators.setIsAuth(true));
      dispatch(AuthActionCreators.setUser(response.data.user));
    } catch (e: any) {
      dispatch(AuthActionCreators.setError(e.response?.data?.message));
    } finally {
      dispatch(AuthActionCreators.setIsLoading(false));
    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    try {
      localStorage.removeItem("token");
      dispatch(AuthActionCreators.setUser({} as IUser));
      dispatch(AuthActionCreators.setIsAuth(false));
    } catch (e: any) {
      dispatch(AuthActionCreators.setError(e.response?.data?.message));
    }
  },

  checkAuth: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));
      const response = await axios.get<AuthResponse>(`${API.HOST}/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem("token", response.data.accessToken);

      dispatch(AuthActionCreators.setIsAuth(true));
      dispatch(AuthActionCreators.setUser(response.data.user));
    } catch (e: any) {
      dispatch(AuthActionCreators.setError(e.response?.data?.message));
    } finally {
      dispatch(AuthActionCreators.setIsLoading(false));
    }
  },
};
