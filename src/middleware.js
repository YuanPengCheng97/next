import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const hasToken = cookies().has("token");
  if (hasToken || request.nextUrl.pathname === "/") {
    return NextResponse.next();
  }
  // If the token exists, the content of the current page is displayed when you click to jump to view the web page source code.
  // If the token does not exist, the content of the root route is displayed when the web page source code is clicked to jump.
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: "/((?!api|_next/*|src|favicon.ico|images).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "next-router-state-tree" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
