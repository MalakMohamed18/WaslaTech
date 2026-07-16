// src/components/auth/ResetPasswordForm.tsx

"use client";

import { useActionState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";

import {
  resetPassword,
  type ActionState,
} from "@/actions/auth";

const initialState: ActionState = {
  success: false,
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="flex h-11 w-full items-center justify-center rounded-lg bg-black text-white transition hover:bg-neutral-800 disabled:opacity-60"
    >
      {pending ? "Updating..." : "Update Password"}
    </button>
  );
}

export default function ResetPasswordForm() {
  const router = useRouter();

  const [state, action] = useActionState(
    resetPassword,
    initialState
  );

  useEffect(() => {
    if (!state.success) return;

    const timer = setTimeout(() => {
      router.replace("/login");
      router.refresh();
    }, 1500);

    return () => clearTimeout(timer);
  }, [router, state.success]);

  return (
    <form
      action={action}
      className="space-y-5 rounded-xl border bg-white p-8 shadow-sm"
    >
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium"
        >
          New Password
        </label>

        <input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
          className="h-11 w-full rounded-lg border px-3 outline-none focus:border-black"
        />

        {state.errors?.password && (
          <p className="mt-1 text-sm text-red-600">
            {state.errors.password[0]}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="confirmPassword"
          className="mb-2 block text-sm font-medium"
        >
          Confirm Password
        </label>

        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          required
          className="h-11 w-full rounded-lg border px-3 outline-none focus:border-black"
        />

        {state.errors?.confirmPassword && (
          <p className="mt-1 text-sm text-red-600">
            {state.errors.confirmPassword[0]}
          </p>
        )}
      </div>

      {state.message && (
        <div
          className={`rounded-lg border px-3 py-2 text-sm ${
            state.success
              ? "border-green-300 bg-green-50 text-green-700"
              : "border-red-300 bg-red-50 text-red-700"
          }`}
        >
          {state.message}
        </div>
      )}

      <SubmitButton />

      <p className="text-center text-sm text-neutral-600">
        Remember your password?{" "}
        <Link
          href="/login"
          className="font-medium hover:underline"
        >
          Back to Login
        </Link>
      </p>
    </form>
  );
}