import { LucideIcon } from "lucide-react";
import { UrlObject } from "url";

export interface INavItem {
  title: string;
  path: UrlObject;
  icon: LucideIcon;
  color?: string;
  isChidren?: boolean;
  position?: "bottom" | "top";
  children?: INavItem[];
}
