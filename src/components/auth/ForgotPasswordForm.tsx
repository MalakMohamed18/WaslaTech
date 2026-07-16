// src/components/auth/ForgotPasswordForm.tsx

"use client";

import { useActionState } from "react";
import Link from "next/link";
import { useFormStatus } from "react-dom";

import {
  forgotPassword,
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
      {pending ? "Sending..." : "Send Reset Link"}
    </button>
  );
}

export default function ForgotPasswordForm() {
  const [state, action] = useActionState(
    forgotPassword,
    initialState
  );

  return (
    <form
      action={action}
      className="space-y-5 rounded-xl border bg-white p-8 shadow-sm"
    >
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium"
        >
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="h-11 w-full rounded-lg border px-3 outline-none focus:border-black"
        />

        {state.errors?.email && (
          <p className="mt-1 text-sm text-red-600">
            {state.errors.email[0]}
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