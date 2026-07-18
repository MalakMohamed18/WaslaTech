import { z } from "zod";

export const navbarPreferencesSchema =
  z.object({
    collapsed: z.boolean(),

    theme: z.enum([
      "light",
      "dark",
      "system",
    ]),

    workspace: z.string(),
  });

export type NavbarPreferencesSchema =
  z.infer<
    typeof navbarPreferencesSchema
  >;