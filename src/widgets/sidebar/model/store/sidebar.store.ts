import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SidebarStore {
  sheet: boolean;
  isOpen: boolean;
  toggle: () => void;
  setSheet: (v: boolean) => void;
}

export const useSidebar = create<SidebarStore>()(
  persist(
    (set, get) => ({
      sheet: false,
      isOpen: false,
      toggle: () => set((state) => ({ isOpen: !state.isOpen })),
      setSheet: (v) => set(() => ({ sheet: v })),
    }),
    {
      name: "sidebar",
    }
  )
);
