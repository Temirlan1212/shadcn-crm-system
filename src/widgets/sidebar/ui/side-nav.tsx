import { HTMLAttributes } from "react";
import { NavItems } from "@/shared/constants/nav-items";
import { NavAccordionItem, NavItemProps, NavLinkItem } from "./side-nav-item";
import { SideNavThemeToggle } from "./side-nav-theme-toggle";

interface SideNavProps extends HTMLAttributes<HTMLHtmlElement> {
  media: "mobile" | "desktop";
}

const topItems = NavItems.filter(
  (item) => item?.position === "top" || !item?.position
);
const bottomItems = NavItems.filter((item) => item?.position === "bottom");

function SideNav({ className, media }: SideNavProps) {
  const navItemsMedia = {
    desktop: { tooltip: true, variant: "toggle" } as NavItemProps,
    mobile: { tooltip: false, variant: "opened" } as NavItemProps,
  };
  const navItemsProps = navItemsMedia[media];

  return (
    <nav className="space-y-2 flex flex-col justify-between h-full">
      <div className="flex flex-col space-y-1">
        {topItems.map((item, index) =>
          item.isChidren ? (
            <NavAccordionItem
              {...navItemsProps}
              key={index}
              item={item}
              className={className}
            >
              {item.children?.map((child) => (
                <NavLinkItem
                  {...navItemsProps}
                  item={child}
                  className={className}
                  key={item.title + index}
                />
              ))}
            </NavAccordionItem>
          ) : (
            <NavLinkItem
              {...navItemsProps}
              item={item}
              className={className}
              key={index}
            />
          )
        )}
      </div>

      <div className="flex flex-col space-y-1">
        <SideNavThemeToggle {...navItemsProps} className={className} />

        {bottomItems.map((item, index) =>
          item.isChidren ? (
            <NavAccordionItem
              {...navItemsProps}
              key={index}
              item={item}
              className={className}
            >
              {item.children?.map((child) => (
                <NavLinkItem
                  {...navItemsProps}
                  item={child}
                  className={className}
                  key={item.title + index}
                />
              ))}
            </NavAccordionItem>
          ) : (
            <NavLinkItem
              {...navItemsProps}
              item={item}
              className={className}
              key={index}
            />
          )
        )}
      </div>
    </nav>
  );
}

export { SideNav };
