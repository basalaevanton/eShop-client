import { AuthActionCreators } from './auth/action-creators';
import { AccountActionCreators } from './accountDash/action-creators';
import { ProductActionCreators } from './products/action-creators';

export const allActionCreators = {
  ...AuthActionCreators,
  ...AccountActionCreators,
  ...ProductActionCreators,
};
