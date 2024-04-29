"use server";

import { db } from "@/db";
import { users } from "@/db/schema";
import { setSession } from "@/lib/jwt";
import { UserInfo } from "@/store/user";

type ActionMessage = {
  type: "ok" | "bad" | "error";
  message: string;
};

type FormData = {
  username: string;
  password: string;
};

export const handleLogin = async ({
  username,
  password,
}: FormData): Promise<ActionMessage | UserInfo> => {
  const user = await db.query.users.findFirst({
    where: (u, { eq }) => eq(u.name, username),
    columns: {
      id: true,
      name: true,
      password: true,
    },
  });

  if (user === undefined) {
    return bad("User not found");
  }
  if (user.password !== password) {
    return bad("Password incorrect");
  }

  await setSession({ id: user.id, username: user.name });

  return { id: user.id, username: user.name };
};

export const handleRegister = async ({
  username,
  password,
}: FormData): Promise<ActionMessage | UserInfo> => {
  const user = await db.query.users.findFirst({
    where: (u, { eq }) => eq(u.name, username),
  });
  if (user !== undefined) {
    return bad("User already exists");
  }
  const userInfo = await db
    .insert(users)
    .values({ name: username, password })
    .returning({ id: users.id, username: users.name });

  await setSession(userInfo[0]);

  return { id: userInfo.id, username: userInfo.name };
};

const ok = (message: string) => {
  return {
    type: "ok" as const,
    message,
  } as ActionMessage;
};

const bad = (message: string) => {
  return {
    type: "bad" as const,
    message,
  } as ActionMessage;
};

const error = (message: string) => {
  return {
    type: "error" as const,
    message,
  } as ActionMessage;
};
