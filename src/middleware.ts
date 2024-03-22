import type { NextRequest } from "next/server";
import { getSession, updateSession } from "./lib/jwt";

export async function middleware(request: NextRequest) {
  const session = await getSession();
  const isSessionValid = session !== null && session.exp > Date.now() / 1000;

  if (!isSessionValid && !request.nextUrl.pathname.startsWith("/login")) {
    return Response.redirect(new URL("/login", request.url));
  }

  return await updateSession(request);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
