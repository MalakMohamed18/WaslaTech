// src/proxy.ts

import { NextRequest, NextResponse } from "next/server";

import { updateSession } from "@/lib/supabase/proxy";

const AUTH_ROUTES = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
] as const;

const DASHBOARD_PREFIX = "/dashboard";

const ALLOWED_ROLES = new Set([
  "Admin",
  "Editor",
  "Writer",
]);

export async function proxy(request: NextRequest) {
  const { supabase, response } = await updateSession(request);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  if (!user) {
    if (pathname.startsWith(DASHBOARD_PREFIX)) {
      const url = request.nextUrl.clone();

      url.pathname = "/login";
      url.searchParams.set("redirect", pathname);

      return NextResponse.redirect(url);
    }

    return response;
  }

const { data: profile } = await supabase
  .from("profiles")
  .select("id,is_active,role_id")
  .eq("id", user.id)
  .single();

if (!profile || !profile.is_active) {
  await supabase.auth.signOut();

  const url = request.nextUrl.clone();
  url.pathname = "/login";

  return NextResponse.redirect(url);
}

const { data: roleRow } = await supabase
  .from("roles")
  .select("name")
  .eq("id", profile.role_id)
  .single();

const role = roleRow?.name;
  if (
    AUTH_ROUTES.includes(pathname as (typeof AUTH_ROUTES)[number])
  ) {
    if (ALLOWED_ROLES.has(role ?? "")) {
      const url = request.nextUrl.clone();

      url.pathname = "/dashboard";

      return NextResponse.redirect(url);
    }

    return response;
  }

  if (pathname.startsWith(DASHBOARD_PREFIX)) {
    if (!ALLOWED_ROLES.has(role ?? "")) {
      const url = request.nextUrl.clone();

      url.pathname = "/";

      return NextResponse.redirect(url);
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};