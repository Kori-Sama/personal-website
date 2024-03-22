import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { env } from "./env";

const key = new TextEncoder().encode(env.JWT_SECRET);

export interface Session extends JWTPayload {
  id: number;
  username: string;
  exp: number;
}

export const encrypt = async (payload: Session) => {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .sign(key);
};

export const decrypt = async (session: string): Promise<Session> => {
  const { payload } = await jwtVerify(session, key, { algorithms: ["HS256"] });
  if (typeof payload.exp === "number") {
  }
  return payload as Session;
};

export const getSession = async () => {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
};

export const setSession = async ({
  id,
  username,
}: {
  id: number;
  username: string;
}) => {
  const exp = Date.now() / 1000 + env.JWT_EXPIRE;
  const session = await encrypt({ id, username, exp });

  console.log(exp);
  cookies().set("session", session, { expires: exp * 1000, httpOnly: true });
};

export const updateSession = async (req: NextRequest) => {
  const session = req.cookies.get("session")?.value;
  if (!session) return null;

  const parsed = await decrypt(session);
  parsed.exp = Date.now() / 1000 + env.JWT_EXPIRE;
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    expires: parsed.exp * 1000,
    httpOnly: true,
  });
  return res;
};
