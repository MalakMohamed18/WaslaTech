// src/app/(auth)/register/page.tsx

import RegisterForm from "@/components/auth/RegisterForm";

export const metadata = {
  title: "Register",
  description: "Create your account",
};

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-gray-600">
            Create your account to continue.
          </p>
        </div>

        <RegisterForm />
      </div>
    </main>
  );
}