import { AppDispatch } from '../../index';
import { AccountUser } from '../../../interfaces/user.interface';
import {
  SetErrorAction,
  SetIsLoadingAction,
  ProductsAction,
  ProductsState,
  ProductsActionEnum,
  SetProductsAction,
} from './types';
import UserService from '../../../services/UserService';
import AuthService from '../../../services/AuthService';
import axios from 'axios';

import { API } from '../../../helpers/api';
import { IProduct } from '../../../interfaces/product.interface';
import ProductService from '../../../services/ProductService';

export const ProductActionCreators = {
  setProducts: (products: IProduct[]): SetProductsAction => ({
    type: ProductsActionEnum.SET_PRODUCTS,
    payload: products,
  }),
  setProductsIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: ProductsActionEnum.SET_PRODUCTS_IS_LOADING,
    payload,
  }),
  setProductsError: (payload: string): SetErrorAction => ({
    type: ProductsActionEnum.SET_PRODUCTS_ERROR,
    payload,
  }),

  fetchProducts: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(ProductActionCreators.setProductsIsLoading(true));

      const response = await ProductService.fetchProducts();
      console.log(response);

      // dispatch(ProductActionCreators.setProducts(response.data));
    } catch (e: any) {
      dispatch(
        ProductActionCreators.setProductsError(e.response?.data?.message)
      );
    } finally {
      dispatch(ProductActionCreators.setProductsIsLoading(false));
    }
  },
};
