"use server";

import { db } from "@/db";
import { comments } from "@/db/schema";
import { decrypt } from "@/lib/jwt";
import { cookies } from "next/headers";

type commentMsg = "OK" | "NoLogin" | "NoUser";

export const sendComment = async (comment: string): Promise<commentMsg> => {
  const session = cookies().get("session")?.value;

  if (session === undefined) {
    return "NoLogin";
  }
  const payload = await decrypt(session);
  const { id, username } = payload;

  const user = await db.query.users.findFirst({
    where: (u, { eq }) => eq(u.name, username) && eq(u.id, id),
  });

  if (!user) {
    return "NoUser";
  }

  db.insert(comments).values({ userId: id, content: comment }).execute();
  return "OK";
};
