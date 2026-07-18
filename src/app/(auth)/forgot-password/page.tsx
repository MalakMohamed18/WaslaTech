import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Reset your account password",
};

export default async function ForgotPasswordPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const { data: profile, error } = await supabase
      .from("profiles")
      .select(
        `
        role_id,
        roles (
          name
        )
      `
      )
      .eq("id", user.id)
      .single();

    if (!error && profile) {
      const role =
        profile.roles && !Array.isArray(profile.roles)
          ? profile.roles.name
          : undefined;

      if (
        role &&
        ["Admin", "Editor", "Writer"].includes(role)
      ) {
        redirect("/dashboard");
      }
    }

    redirect("/");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">
            Forgot Password
          </h1>

          <p className="mt-2 text-gray-500">
            Enter your email to receive a password reset link.
          </p>
        </div>

        <ForgotPasswordForm />

        <p className="mt-6 text-center text-sm text-gray-600">
          Remember your password?{" "}
          <Link
            href="/login"
            className="font-medium text-black hover:underline"
          >
            Back to Login
          </Link>
        </p>
      </div>
    </main>
  );
}