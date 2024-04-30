import { ThemeConfigStore } from "../types/theme-config";

export const selectThemeConfig = (state: ThemeConfigStore) => state.config;
export const selectUpdateThemeConfig = (state: ThemeConfigStore) =>
  state.updateConfig;
