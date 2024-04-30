"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { NavItem, NavItemProps } from "./side-nav-item";
import { cn } from "@/shared/class-names/class-names";

export function SideNavThemeToggle({ className, ...props }: NavItemProps) {
  const { setTheme, theme } = useTheme();
  const toggle = () => setTheme(theme === "light" ? "dark" : "light");
  return (
    <div onClick={toggle}>
      <NavItem
        {...props}
        item={{
          title: theme === "dark" ? "Светлая" : "Тёмная",
          icon: theme === "dark" ? Sun : Moon,
          path: {},
        }}
        className={cn(className)}
      />
    </div>
  );
}
