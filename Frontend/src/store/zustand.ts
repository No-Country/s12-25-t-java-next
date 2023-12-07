import { MessageNotification } from "@/types/notification";
import { create } from "zustand";

type NotifyStore = {
  message: MessageNotification | null;
  showMessageBoolean: boolean;
  add: (message: MessageNotification) => void;
  setShowMessageBoolean: (value: boolean) => void;
};

export const useNotifyStore = create<NotifyStore>((set) => ({
  message: null,
  showMessageBoolean: false,
  add: (message) => set({ message }),
  setShowMessageBoolean: (value) => set({ showMessageBoolean: value }),
}));
