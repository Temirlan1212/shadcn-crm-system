import { ThemeProviderProps } from "next-themes/dist/types";

export const DarkThemesEnum = {
  DARK: "dark",
  BLUE_DARK: "blue-dark",
  ROSE_DARK: "rose-dark",
  SLATE_DARK: "slate-dark",
  GREEN_DARK: "green-dark",
  ORANGE_DARK: "orange-dark",
} as const;

export const LightThemesEnum = {
  LIGHT: "light",
  BLUE_LIGHT: "blue-light",
  ROSE_LIGHT: "rose-light",
  SLATE_LIGHT: "slate-light",
  GREEN_LIGHT: "green-light",
  ORANGE_LIGHT: "orange-light",
} as const;

export const ThemesEnum = {
  ...LightThemesEnum,
  ...DarkThemesEnum,
} as const;

export const Themes: ThemeProviderProps["themes"] = Object.values(ThemesEnum);

export const ThemesData = [
  {
    name: {
      light: ThemesEnum.LIGHT,
      dark: ThemesEnum.DARK,
    },
    label: "Stone",
    activeColor: {
      light: "25 5.3% 44.7%",
      dark: "33.3 5.5% 32.4%",
    },
  },
  {
    name: {
      light: ThemesEnum.SLATE_LIGHT,
      dark: ThemesEnum.SLATE_DARK,
    },
    label: "Slate",
    activeColor: {
      light: "215.4 16.3% 46.9%",
      dark: "215.3 19.3% 34.5%",
    },
  },
  {
    name: {
      light: ThemesEnum.ROSE_LIGHT,
      dark: ThemesEnum.ROSE_DARK,
    },
    label: "Rose",
    activeColor: {
      light: "346.8 77.2% 49.8%",
      dark: "346.8 77.2% 49.8%",
    },
  },
  {
    name: {
      light: ThemesEnum.ORANGE_LIGHT,
      dark: ThemesEnum.ORANGE_DARK,
    },
    label: "Orange",
    activeColor: {
      light: "24.6 95% 53.1%",
      dark: "20.5 90.2% 48.2%",
    },
  },
  {
    name: {
      light: ThemesEnum.GREEN_LIGHT,
      dark: ThemesEnum.GREEN_DARK,
    },
    label: "Green",
    activeColor: {
      light: "142.1 76.2% 36.3%",
      dark: "142.1 70.6% 45.3%",
    },
  },
  {
    name: {
      light: ThemesEnum.BLUE_LIGHT,
      dark: ThemesEnum.BLUE_DARK,
    },
    label: "Blue",
    activeColor: {
      light: "221.2 83.2% 53.3%",
      dark: "217.2 91.2% 59.8%",
    },
  },
] as const;
