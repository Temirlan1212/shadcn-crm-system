"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/shared/class-names/class-names";
import { useSidebar } from "../model/store/sidebar.store";
import { buttonVariants } from "@/ui/button";
import { HTMLAttributes, PropsWithChildren, useState } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./subnav-accordion";
import { INavItem } from "../model/types/sidebar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/tooltip";
import useIsMounted from "@/shared/lib/hooks/useIsMounted/useIsMounted";

type ClassNameType = HTMLAttributes<HTMLHtmlElement>["className"];

export interface NavItemProps {
  item: INavItem;
  className?: ClassNameType;
  tooltip?: boolean;
  variant?: "closed" | "opened" | "toggle";
}

function NavAccordionItem({
  item,
  className,
  children,
  tooltip,
  variant,
}: PropsWithChildren<NavItemProps>) {
  const [openItem, setOpenItem] = useState("");
  const sidebar = useSidebar();
  const staticState =
    variant === "closed" ? false : variant === "opened" && true;
  const isOpen = variant === "toggle" ? sidebar.isOpen : staticState;

  return (
    <NavItemTooltip
      show={tooltip && isOpen}
      key={item.title}
      trigger={
        <Accordion
          type="single"
          collapsible
          className="space-y-2"
          key={item.title}
          value={openItem}
          onValueChange={setOpenItem}
        >
          <AccordionItem
            value={item.title}
            className={cn(
              "border-none rounded-md",
              openItem && "bg-muted/[.4]"
            )}
          >
            <AccordionTrigger
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "group relative flex h-12 justify-between px-4 py-2 duration-200 hover:bg-muted hover:no-underline",
                openItem && "bg-muted"
              )}
            >
              <div>
                <item.icon className={cn("h-5 w-5", item.color)} />
              </div>
              <div
                className={cn(
                  "absolute left-12 duration-200 ",
                  !isOpen && className
                )}
              >
                {item.title}
              </div>
              {isOpen && (
                <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
              )}
            </AccordionTrigger>
            <AccordionContent className="mt-1 space-y-1 py-0">
              {children}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      }
    >
      {item.title}
    </NavItemTooltip>
  );
}

function NavLinkItem({ item, variant, tooltip, className }: NavItemProps) {
  const path = usePathname() || "";
  const sidebarIsOpen = useSidebar((state) => state.isOpen);
  const setSheet = useSidebar((state) => state.setSheet);
  const staticState =
    variant === "closed" ? false : variant === "opened" && true;
  const isOpen = variant === "toggle" ? sidebarIsOpen : staticState;

  return (
    <NavItemTooltip
      key={item.title}
      show={tooltip}
      trigger={
        <Link
          key={item.title}
          href={item.path}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "group relative flex h-12 pr-3 justify-start gap-x-3",
            path === item.path.pathname && "bg-muted hover:bg-muted"
          )}
          onClick={() => {
            if (variant === "opened") setSheet(false);
          }}
        >
          <item.icon className={cn("h-5 w-5", item.color)} />
          <div
            className={cn(
              "absolute left-12 duration-200",
              !isOpen && className
            )}
          >
            {item.title}
          </div>
        </Link>
      }
    >
      {item.title}
    </NavItemTooltip>
  );
}

function NavItem({
  item,
  className,
  active,
  variant,
  tooltip,
}: NavItemProps & { active?: boolean }) {
  const sidebar = useSidebar();
  const staticState =
    variant === "closed" ? false : variant === "opened" && true;
  const isOpen = variant === "toggle" ? sidebar.isOpen : staticState;
  return (
    <NavItemTooltip
      show={tooltip}
      key={item.title}
      trigger={
        <div
          key={item.title}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "group relative flex h-12 pr-3 justify-start gap-x-3 cursor-pointer",
            active && "bg-muted hover:bg-muted"
          )}
        >
          <item.icon className={cn("h-5 w-5", item.color)} />
          <div
            className={cn(
              "absolute left-12 duration-200",
              !isOpen && className
            )}
          >
            {item.title}
          </div>
        </div>
      }
    >
      {item.title}
    </NavItemTooltip>
  );
}

function NavItemTooltip({
  children,
  trigger,
  show,
}: PropsWithChildren<{
  trigger: React.ReactElement;
  show: boolean | undefined;
}>) {
  const { isOpen } = useSidebar();
  const { isMounted } = useIsMounted();
  if (!show || isOpen) return trigger;
  return (
    isMounted && (
      <Tooltip delayDuration={0.3}>
        <TooltipTrigger className="w-full">{trigger || ""}</TooltipTrigger>
        <TooltipContent
          side="right"
          className="mt-[6px] bg-foreground/[.8]"
          align="start"
        >
          {children}
        </TooltipContent>
      </Tooltip>
    )
  );
}

export { NavItemTooltip, NavItem, NavLinkItem, NavAccordionItem };
