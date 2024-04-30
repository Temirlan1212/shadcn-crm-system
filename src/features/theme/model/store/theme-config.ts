import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ThemeConfigStore } from "../types/theme-config";

export const useThemeConfig = create<ThemeConfigStore>()(
  persist(
    (set, get) => ({
      config: {
        light: "light",
        dark: "dark",
      },
      updateConfig: (config) => {
        set({
          config: { ...get().config, ...config },
        });
      },
    }),
    {
      name: "theme-config",
    }
  )
);
