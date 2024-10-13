/** @format */

import { AxiosError } from "axios";
import AXIOS from "../utils/axiosInstance";

export interface user {
  id: number;
  fName: string;
  lName: string;
  dob: Date;
  address: string;
  email: string;
  phone: string;
  password: string;
  role: "user" | "admin";
}

export interface credentials {
  firstCred: string;
  password: string;
}

export interface UserResponse {
  status: string;
  message?: string;
  accessToken?: string;
  data: user;
  statusCode: number;
}

export interface refreshResponse {
  status: string;
  accessToken: string;
  message?: string;
}

export async function signUp(user: user): Promise<UserResponse> {
  try {
    const controller = new AbortController();
    const { data, status } = await AXIOS.post<UserResponse>(
      "/user/signup",
      user,
      { timeout: 120000, signal: controller.signal }
    );

    if (!data) throw new Error("Operation failed");
    if (status.toString().startsWith("40"))
      throw new Error(`Error | message: ${data?.message} | code: ${status}`);

    controller.abort();
    return data;
  } catch (e) {
    if (e instanceof AxiosError) {
      console.error(`ERROR | Axios Error`, e.response?.data);
    }
    return Promise.reject(e);
  }
}

export async function login(credentials: credentials): Promise<UserResponse> {
  try {
    const controller = new AbortController();
    const { data, status } = await AXIOS.post<UserResponse>(
      "/user/login",
      credentials,
      {
        timeout: 60000,
        signal: controller.signal,
      }
    );
    if (!data) throw new Error("Operation failed");
    if (status.toString().startsWith("40"))
      throw new Error(`Error | message: ${data?.message} | code: ${status}`);

    controller.abort();
    return data;
  } catch (e) {
    if (e instanceof AxiosError) {
      console.error(`ERROR | Axios Error`, e.response?.data);
    }
    return Promise.reject(e);
  }
}

export async function refreshToken(): Promise<void> {
  try {
    const controller = new AbortController();
    const { data, status } = await AXIOS.get<refreshResponse>("/user/refresh");

    if (!data) throw new Error("Refresh failed");
    if (status.toString().startsWith("40"))
      throw new Error(`Error | message: ${data?.message} | code: ${status}`);

    controller.abort();
    sessionStorage.setItem("accessToken", data.accessToken);
  } catch (e) {
    if (e instanceof AxiosError)
      console.error("ERROR | Axios Error", e.response?.data);
    sessionStorage.removeItem("accessToken");
    window.location.replace("/login");
  }
}
