// src/app/(auth)/forgot-password/page.tsx

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
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    if (
      profile &&
      ["Admin", "Editor", "Writer"].includes(profile.role)
    ) {
      redirect("/dashboard");
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