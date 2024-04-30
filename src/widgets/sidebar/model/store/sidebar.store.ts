import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SidebarStore {
  isOpen: boolean;
  toggle: () => void;
}

export const useSidebar = create<SidebarStore>()(
  persist(
    (set, get) => ({
      isOpen: false,
      toggle: () => set((state) => ({ isOpen: !state.isOpen })),
    }),
    {
      name: "sidebar",
    }
  )
);
