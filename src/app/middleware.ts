import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifySession } from "@/auth/dal";

export async function middleware(request: NextRequest) {
  const { user } = await verifySession();
  if (!user) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/store/:path*", "/admin/:path*"],
};
