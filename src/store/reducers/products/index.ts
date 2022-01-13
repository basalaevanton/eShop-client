import { ProductsAction, ProductsState, ProductsActionEnum } from './types';

const initialState: ProductsState = {
  products: [],
  error: '',
  isLoading: false,
};

export default function accountReducer(
  state = initialState,
  action: ProductsAction
): ProductsState {
  switch (action.type) {
    case ProductsActionEnum.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case ProductsActionEnum.SET_PRODUCTS_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case ProductsActionEnum.SET_PRODUCTS_IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}
