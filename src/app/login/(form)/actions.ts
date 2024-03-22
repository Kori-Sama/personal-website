"use server";

type ActionMessage = {
  type: "ok" | "bad" | "error";
  message: string;
};

type FormData = {
  username: string;
  password: string;
};

export const handleLogin = async ({ username, password }: FormData) => {
  return {
    type: "ok" as const,
    message: username,
  } as ActionMessage;
};

export const handleRegister = async ({ username, password }: FormData) => {
  return {
    type: "ok" as const,
    message: username,
  } as ActionMessage;
};
