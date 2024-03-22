"use server";

type ActionMessage = {
  type: "ok" | "bad" | "error";
  message: string;
};

export const handleLogin = async (formData: FormData) => {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  return {
    type: "ok" as const,
    message: username,
  } as ActionMessage;
};

export const handleRegister = async (formData: FormData) => {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  return {
    type: "ok" as const,
    message: username,
  } as ActionMessage;
};
