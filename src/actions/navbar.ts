"use server";

import { navbarPreferencesSchema } from "@/schemas/navbar.schema";

export async function saveNavbarPreferences(
  input: unknown,
) {
  const result =
    navbarPreferencesSchema.safeParse(input);

  if (!result.success) {
    throw new Error("Invalid navbar preferences.");
  }

  return {
    success: true,
    data: result.data,
  };
}