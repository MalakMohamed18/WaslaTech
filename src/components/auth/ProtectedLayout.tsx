// src/components/auth/ProtectedLayout.tsx

"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/hooks/useAuth";

type Role = "Admin" | "Editor" | "Writer";

interface ProtectedLayoutProps {
  children: ReactNode;
}

const ALLOWED_ROLES: Role[] = [
  "Admin",
  "Editor",
  "Writer",
];

export default function ProtectedLayout({
  children,
}: ProtectedLayoutProps) {
  const router = useRouter();

  const {
    loading,
    authenticated,
    profile,
  } = useAuth();

  useEffect(() => {
    if (loading) return;

    if (!authenticated) {
      router.replace("/login");
      return;
    }

    const role = profile?.roles?.name as
      | Role
      | undefined;

    if (!role || !ALLOWED_ROLES.includes(role)) {
      router.replace("/");
    }
  }, [
    authenticated,
    loading,
    profile,
    router,
  ]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-neutral-300 border-t-black" />
      </main>
    );
  }

  if (!authenticated) {
    return null;
  }

  const role = profile?.roles?.name as
    | Role
    | undefined;

  if (!role || !ALLOWED_ROLES.includes(role)) {
    return null;
  }

  return <>{children}</>;
}