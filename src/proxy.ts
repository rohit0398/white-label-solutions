import { NextRequest, NextResponse } from "next/server";

const SUPPORTED_LOCALES = ["es", "de", "fr", "hi"];

const BOT_USER_AGENTS = [
  "googlebot",
  "bingbot",
  "yandexbot",
  "baiduspider",
  "duckduckbot",
  "slurp",
  "twitterbot",
  "facebookexternalhit",
  "linkedinbot",
  "slackbot",
];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Bypass static files, API routes, and system endpoints
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml")
  ) {
    return NextResponse.next();
  }

  // 2. Googlebot Safe Rule: Never redirect search engine crawlers away from their target
  const userAgent = (request.headers.get("user-agent") || "").toLowerCase();
  const isBot = BOT_USER_AGENTS.some((bot) => userAgent.includes(bot));
  if (isBot) {
    return NextResponse.next();
  }

  // 3. If URL already has a supported locale (/es, /de, /fr, /hi)
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0]?.toLowerCase();

  if (firstSegment && SUPPORTED_LOCALES.includes(firstSegment)) {
    // Sync cookie with the active URL locale if different
    const currentCookie = request.cookies.get("NEXT_LOCALE")?.value;
    if (currentCookie !== firstSegment) {
      const response = NextResponse.next();
      response.cookies.set("NEXT_LOCALE", firstSegment, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      });
      return response;
    }
    return NextResponse.next();
  }

  // If user visits /en, redirect to canonical clean root /
  if (firstSegment === "en") {
    const cleanUrl = new URL(request.url);
    cleanUrl.pathname = "/" + segments.slice(1).join("/");
    const response = NextResponse.redirect(cleanUrl, 307);
    response.cookies.set("NEXT_LOCALE", "en", {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  // 4. Only inspect language preference for the exact root landing page ("/")
  if (pathname === "/") {
    const savedLocale = request.cookies.get("NEXT_LOCALE")?.value;

    // Check if user previously saved a preference
    if (savedLocale && SUPPORTED_LOCALES.includes(savedLocale)) {
      return NextResponse.redirect(new URL(`/${savedLocale}`, request.url), 307);
    }

    // If no saved preference, inspect Accept-Language header
    if (!savedLocale) {
      const acceptLanguage = (request.headers.get("accept-language") || "").toLowerCase();
      let matchedLocale: string | null = null;

      if (acceptLanguage.startsWith("es") || acceptLanguage.includes(",es")) {
        matchedLocale = "es";
      } else if (acceptLanguage.startsWith("de") || acceptLanguage.includes(",de")) {
        matchedLocale = "de";
      } else if (acceptLanguage.startsWith("fr") || acceptLanguage.includes(",fr")) {
        matchedLocale = "fr";
      } else if (acceptLanguage.startsWith("hi") || acceptLanguage.includes(",hi")) {
        matchedLocale = "hi";
      }

      if (matchedLocale) {
        return NextResponse.redirect(new URL(`/${matchedLocale}`, request.url), 307);
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, icons)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
