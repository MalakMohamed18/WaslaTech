export const sidebarService = {
  async savePreference(
    collapsed: boolean,
  ) {
    return {
      collapsed,
    };
  },
};