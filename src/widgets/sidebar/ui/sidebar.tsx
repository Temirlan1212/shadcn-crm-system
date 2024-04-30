"use client";
import React, { useState } from "react";
import { cn } from "@/shared/class-names/class-names";
import { useSidebar } from "../model/store/sidebar.store";
import { ArrowLeft } from "lucide-react";
import Logo from "./logo";
import { SideNav } from "./side-nav";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const { isOpen, toggle } = useSidebar();
  const [status, setStatus] = useState(false);

  const handleToggle = () => {
    setStatus(true);
    toggle();
    setTimeout(() => setStatus(false), 500);
  };

  return (
    <nav
      className={cn(
        `relative h-screen border-r`,
        status && "duration-500",
        isOpen ? "w-72" : "w-[78px]",
        className
      )}
    >
      <Logo>
        <div className="font-bold">EXEDRIVE</div>
      </Logo>

      <ArrowLeft
        className={cn(
          "absolute -right-4 top-[50px] z-10 cursor-pointer p-[6px] rounded-full border bg-background text-3xl text-foreground h-8 w-8",
          !isOpen && "rotate-180"
        )}
        onClick={handleToggle}
      />
      <div className="space-y-4 py-4 h-full">
        <div className="px-3 py-2 h-full">
          <div className="mt-3 space-y-1 h-[94%] overflow-y-auto">
            <SideNav
              media="desktop"
              className="text-background opacity-0 transition-all duration-300 group-hover:z-50 group-hover:ml-4 group-hover:rounded-md group-hover:bg-foreground/[.8] group-hover:p-2"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
