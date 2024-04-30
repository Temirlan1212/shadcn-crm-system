import { DarkThemesEnum, LightThemesEnum } from "@/shared/constants/theme";
import { ValueOf } from "next/dist/shared/lib/constants";

export interface ThemeConfigStore {
  config: {
    light?: ValueOf<typeof LightThemesEnum>;
    dark?: ValueOf<typeof DarkThemesEnum>;
  };
  updateConfig: (v: ThemeConfigStore["config"]) => void;
}
