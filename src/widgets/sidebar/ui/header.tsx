import Link from "next/link";
import MobileSidebar from "./mobile-sidebar";
import { ThemeToggle } from "./theme-toggle";
import { PropsWithChildren } from "react";

export default function Header({ children }: PropsWithChildren) {
  return (
    <div className="h-full">
      <div className="block md:!hidden supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur">
        <nav className="flex h-16 items-center justify-between px-4">
          <Link
            href={"/"}
            className="hidden items-center justify-between gap-2 md:flex"
          >
            <h1 className="text-lg font-semibold">Exedrive</h1>
          </Link>
          <div className="block md:!hidden">
            <MobileSidebar />
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </nav>
      </div>
      {children}
    </div>
  );
}
