"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logout = async () => {
  cookies().set("session", "", { expires: 0 });
  redirect("/login");
};
