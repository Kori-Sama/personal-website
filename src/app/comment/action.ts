"use server";

import { db } from "@/db";
import { comments } from "@/db/schema";
import { decrypt } from "@/lib/jwt";
import { CommentType } from "@/store/comments";
import { cookies } from "next/headers";

type commentMsg = "NoLogin" | "NoUser";

export const sendComment = async (
  comment: string
): Promise<commentMsg | CommentType> => {
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

  const res = await db
    .insert(comments)
    .values({ userId: id, content: comment })
    .returning({
      id: comments.id,
      content: comments.content,
      createdAt: comments.createdAt,
    });

  const c = res.at(0)!;
  return {
    id: c.id,
    content: c.content,
    createdAt: c.createdAt,
    user: {
      id,
      name: username,
    },
  };
};
