import { AccountUser } from "../../../interfaces/user.interface";
import { AccountActionEnum, AccountAction, AccountDash } from "./types";

const initialState: AccountDash = {
  userAccount: {} as AccountUser,

  error: "",
  isLoading: false,
};

export default function accountReducer(
  state = initialState,
  action: AccountAction
): AccountDash {
  switch (action.type) {
    case AccountActionEnum.SET_ACC_USER:
      return { ...state, userAccount: action.payload };
    case AccountActionEnum.SET_ACC_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case AccountActionEnum.SET_ACC_IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}
