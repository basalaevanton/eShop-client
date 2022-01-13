import { AxiosResponse } from 'axios';
import $api from '../http';
import { IProduct } from '../interfaces/product.interface';

import { AccountUser } from '../interfaces/user.interface';

export default class ProductService {
  
  static async fetchProducts(): Promise<AxiosResponse<IProduct[]>> {
    return $api.get(`/products/`);
  }

  static async addNewProduct(
    product: IProduct
  ): Promise<AxiosResponse<IProduct>> {
    return $api.post<IProduct>('/products/', product);
  }
}
