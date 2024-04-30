import { type INavItem } from "@/widgets/sidebar/model/types/sidebar";
import {
  BookOpen,
  Folder,
  Home,
  List,
  MessageSquareMore,
  Pipette,
  Search,
  Settings,
} from "lucide-react";

export const NavItems: INavItem[] = [
  {
    title: "Главная",
    icon: Home,
    path: { pathname: "/" },
    color: "text-500",
  },
  {
    title: "Поиск",
    icon: Search,
    path: { query: "sidebar=search" },
    color: "text-500",
  },
  {
    title: "Проекты",
    icon: Folder,
    path: { pathname: "/projects" },
    color: "text-500",
  },
  {
    title: "Курсы",
    icon: BookOpen,
    path: { pathname: "/courses" },
    color: "text-500",
    isChidren: true,
    children: [
      {
        title: "Список курсов",
        icon: List,
        color: "text-500",
        path: { pathname: "/courses/list" },
      },
    ],
  },
  {
    title: "Поддержка",
    icon: MessageSquareMore,
    path: { pathname: "/support" },
    color: "text-500",
    position: "bottom",
  },
  {
    title: "Настройки",
    icon: Settings,
    path: { pathname: "/settings" },
    color: "text-500",
    position: "bottom",
    isChidren: true,
    children: [
      {
        title: "Цвет интерфейса",
        icon: Pipette,
        color: "text-500",
        path: { pathname: "/settings/theme" },
      },
    ],
  },
];
