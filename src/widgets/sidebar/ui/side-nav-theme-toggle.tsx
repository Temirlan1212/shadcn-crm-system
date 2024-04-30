"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { NavItem, NavItemProps } from "./side-nav-item";
import { cn } from "@/shared/class-names/class-names";
import { ThemesEnum } from "@/shared/constants/theme";
import { selectThemeConfig, useThemeConfig } from "@/features/theme";

export function SideNavThemeToggle({ className, ...props }: NavItemProps) {
  const { setTheme, theme } = useTheme();
  const mode = useThemeConfig(selectThemeConfig);
  const dark = mode.dark || "dark";
  const light = mode.light || "light";

  const toggle = () => setTheme(theme === light ? dark : light);

  return (
    <div onClick={toggle}>
      <NavItem
        {...props}
        item={{
          title: theme === ThemesEnum.DARK ? "Светлая" : "Тёмная",
          icon: theme === ThemesEnum.DARK ? Sun : Moon,
          path: {},
        }}
        className={cn(className)}
      />
    </div>
  );
}
