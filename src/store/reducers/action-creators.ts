import { AuthActionCreators } from "./auth/action-creators";
import { AccountActionCreators } from "./accountDash/action-creators";

export const allActionCreators = {
  ...AuthActionCreators,
  ...AccountActionCreators,
};
