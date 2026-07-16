import { z } from "zod";

export const sidebarSchema = z.object({
  collapsed: z.boolean(),
});

export type SidebarSchema = z.infer<typeof sidebarSchema>;