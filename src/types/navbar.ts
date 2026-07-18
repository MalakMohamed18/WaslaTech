export interface NavbarPreferences {
  collapsed: boolean;

  theme:
    | "light"
    | "dark"
    | "system";

  workspace: string;
}

export interface NotificationItem {
  id: string;

  title: string;

  description: string;

  read: boolean;

  createdAt: string;
}

export interface Workspace {
  id: string;

  name: string;

  slug: string;
}