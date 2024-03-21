import { AxiosError } from "axios";
import http from ".";

type Message = {
  type: "success" | "bad" | "error";
  message: string;
};

type LoginInfo = {
  username: string;
  password: string;
};

const loginPath = "/login";

const auth = async (type: "login" | "register", data: LoginInfo) => {
  try {
    let response;
    if ((type = "login")) {
      response = await http.patch(loginPath, data);
    } else {
      response = await http.post(loginPath, data);
    }
    const { message } = response.data as LoginResponse;
    return { type: "success", message } as Message;
  } catch (e: any) {
    if (e.response.status === 400) {
      return { type: "bad", message: e.response.data.message } as Message;
    } else {
      return { type: "error", message: e.message } as Message;
    }
  }
};

export const login = async (userInfo: LoginInfo) => {
  return auth("login", userInfo);
};

export const register = async (userInfo: LoginInfo) => {
  return auth("register", userInfo);
};
