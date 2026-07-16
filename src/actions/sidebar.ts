"use server";

import { z } from "zod";

const sidebarPreferenceSchema =
  z.object({
    collapsed: z.boolean(),
  });


export async function updateSidebarPreference(
  input: unknown,
) {
  const result =
    sidebarPreferenceSchema.safeParse(
      input,
    );

  if (!result.success) {
    throw new Error(
      "Invalid sidebar preference",
    );
  }

  return {
    success: true,
    data: result.data,
  };
}