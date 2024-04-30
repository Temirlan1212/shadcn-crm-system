"use client";
import React, { PropsWithChildren } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSidebar } from "../model/store/sidebar.store";
import { cn } from "@/shared/class-names/class-names";

interface LogoProps {
  className?: string;
}

export default function Logo({
  className,
  children,
}: PropsWithChildren<LogoProps>) {
  const { isOpen } = useSidebar();
  return (
    <div className={cn("pt-[20px]", !isOpen ? "px-3" : "pl-[25px]")}>
      <Link href="/" className="flex gap-2 items-center">
        <Image
          src={"../logo.svg"}
          width={50}
          height={30}
          className={className}
          alt={"logo"}
        />
        <div className={cn("duration-200", !isOpen && "opacity-0")}>
          {children}
        </div>
      </Link>
    </div>
  );
}
