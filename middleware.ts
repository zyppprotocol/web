import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ADMIN_COOKIE = "admin_auth";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;

  // Admin authentication check
  if (pathname.startsWith("/admin")) {
    // Allow login page and auth API
    if (pathname === "/admin/login" || pathname.startsWith("/api/admin/auth")) {
      return NextResponse.next();
    }

    // Check for auth cookie
    const authCookie = request.cookies.get(ADMIN_COOKIE);
    
    if (!authCookie) {
      // Redirect to login
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }

    // Verify token (basic check)
    try {
      const decoded = Buffer.from(authCookie.value, "base64").toString();
      // Validate using env-based password to keep in sync with API route
      if (!ADMIN_PASSWORD || !decoded.startsWith(ADMIN_PASSWORD)) {
        const url = request.nextUrl.clone();
        url.pathname = "/admin/login";
        return NextResponse.redirect(url);
      }
    } catch {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
  }

  // Check if accessing admin subdomain
  if (hostname.startsWith("admin.") || hostname === "admin.zypp.fun") {
    // If already on /admin path, allow it
    if (pathname.startsWith("/admin")) {
      return NextResponse.next();
    }

    // Rewrite root and other paths to /admin
    const url = request.nextUrl.clone();
    if (pathname === "/") {
      url.pathname = "/admin";
    } else {
      url.pathname = `/admin${pathname}`;
    }
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
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
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
