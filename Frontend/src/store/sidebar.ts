import { Product } from "@/types/Product";
import { create } from "zustand";
import { persist } from "zustand/middleware";
;



type SideBarStore = {
    sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
};

export const useSideBarStore = create(
  persist<SideBarStore>(
    (set) => ({
        sidebarOpen: false,
      setSidebarOpen: (value) => set({ sidebarOpen: value }),
    }),
    {
      name: "sidebar",
    }
  )
);
