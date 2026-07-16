"use server";

export async function saveSidebarPreference(
  collapsed: boolean,
) {
  return {
    success: true,
    collapsed,
  };
}