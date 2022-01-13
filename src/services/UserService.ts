import { AxiosResponse } from 'axios';
import $api from '../http';

import { AccountUser } from '../interfaces/user.interface';

export default class UserService {
  
  static async fetchUser(id: number): Promise<AxiosResponse<AccountUser>> {
    return $api.get(`/users/${id}`);
  }

  static async editUserInfo(
    user: AccountUser
  ): Promise<AxiosResponse<AccountUser>> {
    return $api.post<AccountUser>('/users/editUserInfo', user);
  }
}
