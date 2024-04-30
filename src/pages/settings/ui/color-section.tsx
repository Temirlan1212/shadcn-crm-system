"use client";
import React from "react";
import {
  selectThemeConfig,
  selectUpdateThemeConfig,
  useThemeConfig,
} from "@/features/theme";
import { cn } from "@/shared/class-names/class-names";
import { ThemesData } from "@/shared/constants/theme";
import { Button } from "@/shared/ui/button";
import { CheckIcon } from "lucide-react";
import { useTheme } from "next-themes";

// Component for Light Theme Buttons
function ThemeButton({ type }: { type: "dark" | "light" }) {
  const updateThemeConfig = useThemeConfig(selectUpdateThemeConfig);
  const themeVariants = useThemeConfig(selectThemeConfig);
  const themeVariant = themeVariants[type];
  const { setTheme } = useTheme();

  return (
    <div className="flex flex-wrap gap-2">
      {ThemesData.map((theme, index) => (
        <Button
          variant={"outline"}
          size="sm"
          key={index}
          onClick={() => {
            updateThemeConfig({
              [type]: theme.name[type],
            });
            setTheme(theme.name[type]);
          }}
          className={cn(
            "justify-start min-w-[120px]",
            themeVariant === theme.name[type] && "border-2 border-primary"
          )}
          style={
            {
              "--theme-primary": `hsl(${theme?.activeColor[type]})`,
            } as React.CSSProperties
          }
        >
          <span
            className={cn(
              "mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full bg-[--theme-primary]"
            )}
          >
            {themeVariant === theme.name[type] && (
              <CheckIcon className="w-3 h-3 text-white" />
            )}
          </span>
          {theme.label}
        </Button>
      ))}
    </div>
  );
}

export function ColorSection() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <p>Выберите цвет для светлого режима </p>
        <ThemeButton type="light" />
      </div>

      <div className="flex flex-col gap-3">
        <p>Выберите цвет для тёмного режима </p>
        <ThemeButton type="dark" />
      </div>
    </div>
  );
}
