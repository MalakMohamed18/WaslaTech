"use client";

import { useState } from "react";

export function useDashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return {
    sidebarOpen,
    toggleSidebar: () => setSidebarOpen((value) => !value),
  };
}