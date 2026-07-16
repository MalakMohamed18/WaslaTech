// src/components/auth/RoleGuard.tsx

"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/hooks/useAuth";

export type Role =
  | "Admin"
  | "Editor"
  | "Writer"
  | "Viewer";

interface RoleGuardProps {
  allow: Role[];
  children: ReactNode;
  fallback?: ReactNode;
  redirectTo?: string;
}

export default function RoleGuard({
  allow,
  children,
  fallback = null,
  redirectTo,
}: RoleGuardProps) {
  const router = useRouter();

  const {
    loading,
    authenticated,
    profile,
  } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-300 border-t-black" />
      </div>
    );
  }

  if (!authenticated) {
    if (redirectTo) {
      router.replace(redirectTo);
    }

    return <>{fallback}</>;
  }

  const role = profile?.roles?.name;

  if (!role || !allow.includes(role as Role)) {
    if (redirectTo) {
      router.replace(redirectTo);
    }

    return <>{fallback}</>;
  }

  return <>{children}</>;
}