// src/providers/AuthProvider.tsx

"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { Session, User } from "@supabase/supabase-js";

import { createClient } from "@/lib/supabase/client";
import type { Database } from "@/types/database";

type Profile =
  Database["public"]["Tables"]["profiles"]["Row"] & {
    roles:
      | Database["public"]["Tables"]["roles"]["Row"]
      | null;
  };

type AuthContextValue = {
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  loading: boolean;
  authenticated: boolean;
  refresh: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(
  null
);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const supabase = useMemo(() => createClient(), []);

  const [loading, setLoading] = useState(true);

  const [session, setSession] =
    useState<Session | null>(null);

  const [user, setUser] = useState<User | null>(null);

  const [profile, setProfile] =
    useState<Profile | null>(null);

  const loadProfile = useCallback(
    async (userId: string | null) => {
      if (!userId) {
        setProfile(null);
        return;
      }

      const { data } = await supabase
        .from("profiles")
        .select(
          `
            *,
            roles(*)
          `
        )
        .eq("id", userId)
        .single();

      setProfile(data as Profile | null);
    },
    [supabase]
  );

  const refresh = useCallback(async () => {
    setLoading(true);

    const {
      data: { session },
    } = await supabase.auth.getSession();

    setSession(session);
    setUser(session?.user ?? null);

    await loadProfile(session?.user.id ?? null);

    setLoading(false);
  }, [loadProfile, supabase]);

  useEffect(() => {
    void refresh();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);

        await loadProfile(session?.user.id ?? null);

        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, [loadProfile, refresh, supabase]);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      session,
      profile,
      loading,
      authenticated: !!session,
      refresh,
    }),
    [
      user,
      session,
      profile,
      loading,
      refresh,
    ]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuthContext must be used inside AuthProvider."
    );
  }

  return context;
}