"use client";

import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/ui/sheet";
import { SideNav } from "./side-nav";
import Logo from "./logo";
import useIsMounted from "@/shared/lib/hooks/useIsMounted/useIsMounted";
import { useSidebar } from "../model/store/sidebar.store";

export default function MobileSidebar() {
  const isOpen = useSidebar((state) => state.sheet);
  const setSheet = useSidebar((state) => state.setSheet);
  const { isMounted } = useIsMounted();
  if (!isMounted) return null;

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setSheet}>
        <SheetTrigger asChild>
          <div className="flex items-center justify-center gap-2">
            <MenuIcon />
          </div>
        </SheetTrigger>
        <SheetContent side="bottom" className="w-full">
          <Logo>
            <div className="font-bold">EXEDRIVE</div>
          </Logo>
          <div className="px-1 py-6 pt-10 h-full px-2 max-h-[600px] overflow-y-auto">
            <SideNav media="mobile" />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
