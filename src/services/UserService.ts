import { AxiosResponse } from "axios";
import $api from "../http";

import { IUser } from "../interfaces/user.interface";

export default class UserService {
  static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get("/users");
  }
}
