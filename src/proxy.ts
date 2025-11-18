import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import authConfig from "./auth.config";

const { auth: middleware } = NextAuth(authConfig);

const authRoutes = ["/auth/login", "/auth/register"];
const protectedRoutes = ["/admin", "/admin/users"];

export default middleware(async (req) => {
  const { auth, nextUrl } = req;

  const isLoggedIn = !!auth?.user;

  if (protectedRoutes.includes(nextUrl.pathname) && !isLoggedIn) {
    return NextResponse.redirect(new URL("/auth/login", nextUrl));
  }

  if (authRoutes.includes(nextUrl.pathname) && isLoggedIn) {
    return NextResponse.redirect(new URL("/", nextUrl));
  }
});

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)", "/api/:path*"],
};
