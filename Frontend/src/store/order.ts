
import { create } from "zustand";
import { persist } from "zustand/middleware";
;



type OrderStore = {
  sesionOrder: number | null;
  setSessionOrder: (value: number| null) => void;
  clearSessionOrder: () => void;
};

export const useSessionOrderStore = create(
  persist<OrderStore>(
    (set) => ({
    sesionOrder: null,
      setSessionOrder: (value) => set({ sesionOrder: value }),
      clearSessionOrder: () => set({ sesionOrder: null }),
    }),
    {
      name: "ss-oo",
    }
  )
);
