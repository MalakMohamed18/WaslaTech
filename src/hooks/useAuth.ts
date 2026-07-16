// src/hooks/useAuth.ts

"use client";

import { useAuthContext } from "@/providers/AuthProvider";
import { Role } from "@/types/auth";
export function useAuth() {
  return useAuthContext();
}

export function useUser() {
  return useAuthContext().user;
}

export function useSession() {
  return useAuthContext().session;
}

export function useProfile() {
  return useAuthContext().profile;
}

export function useRole() {
  return useAuthContext().profile?.roles?.name ?? null;
}

export function useIsAuthenticated() {
  return useAuthContext().authenticated;
}

export function useIsLoading() {
  return useAuthContext().loading;
}

export function useRefreshSession() {
  return useAuthContext().refresh;
}

export function useHasRole(
  ...roles: Array<"Admin" | "Editor" | "Writer" | "Viewer">
) {
  const { user } = useAuthContext();

  const role: Role | null = user?.role as Role | null;

  if (!role) {
    return false;
  }

  return roles.includes(role);
}

export function useCanAccessDashboard() {
  return useHasRole(
    "Admin",
    "Editor",
    "Writer"
  );
}

export function useIsAdmin() {
  return useHasRole("Admin");
}

export function useIsEditor() {
  return useHasRole("Editor");
}

export function useIsWriter() {
  return useHasRole("Writer");
}

export function useIsViewer() {
  return useHasRole("Viewer");
}