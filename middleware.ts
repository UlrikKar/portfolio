import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/work/celsia/unlock")) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/work/celsia")) {
    const cookie = request.cookies.get("celsia_access");
    if (cookie?.value !== "granted") {
      return NextResponse.redirect(new URL("/work/celsia/unlock", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/work/celsia", "/work/celsia/:path*"],
};
