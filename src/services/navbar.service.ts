import type {
  NavbarPreferences,
} from "@/types/navbar";

class NavbarService {
  async getPreferences(): Promise<NavbarPreferences> {
    return {
      collapsed: false,
      theme: "dark",
      workspace: "WaslaTech HQ",
    };
  }

  async savePreferences(
    preferences: NavbarPreferences,
  ) {
    return preferences;
  }
}

export const navbarService =
  new NavbarService();