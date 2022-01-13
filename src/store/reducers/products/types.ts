import { IProduct } from '../../../interfaces/product.interface';

export interface ProductsState {
  products: IProduct[];
  isLoading: boolean;
  error: string;
}

export enum ProductsActionEnum {
  SET_PRODUCTS = 'SET_PRODUCTS',
  SET_PRODUCTS_ERROR = 'SET_PRODUCTS_ERROR',
  SET_PRODUCTS_IS_LOADING = 'SET_PRODUCTS_IS_LOADING',
}

export interface SetProductsAction {
  type: ProductsActionEnum.SET_PRODUCTS;
  payload: IProduct[];
}
export interface SetErrorAction {
  type: ProductsActionEnum.SET_PRODUCTS_ERROR;
  payload: string;
}

export interface SetIsLoadingAction {
  type: ProductsActionEnum.SET_PRODUCTS_IS_LOADING;
  payload: boolean;
}

export type ProductsAction =
  | SetProductsAction
  | SetErrorAction
  | SetIsLoadingAction;
