"use client";

import { useState } from "react";

export function useNavbar() {
  const [searchOpen, setSearchOpen] =
    useState(false);

  const [notificationsOpen, setNotificationsOpen] =
    useState(false);

  const [profileOpen, setProfileOpen] =
    useState(false);

  return {
    searchOpen,
    notificationsOpen,
    profileOpen,

    openSearch: () => setSearchOpen(true),
    closeSearch: () => setSearchOpen(false),

    toggleNotifications: () =>
      setNotificationsOpen((v) => !v),

    toggleProfile: () =>
      setProfileOpen((v) => !v),
  };
}