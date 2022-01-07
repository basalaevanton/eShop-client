import { AxiosResponse } from "axios";
import $api from "../http";
import { AuthResponse } from "../interfaces/authResponse";
import { CreateUser } from "../interfaces/user.interface";

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/auth/login", { email, password });
  }

  static async registration(
    user: CreateUser
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/auth/registration", user);
  }

  static async logout(): Promise<void> {
    return $api.post("/auth/logout");
  }
}
