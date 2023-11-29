import { MessageNotification } from "@/types/notification";
import { create } from "zustand";

type NotifyStore = {
	message: MessageNotification | {};
	showMessageBoolean: boolean;
	add: (message: MessageNotification) => void;
	setShowMessageBoolean: (value: boolean) => void;
};

export const useNotifyStore = create<NotifyStore>((set) => ({
	message: {},
	showMessageBoolean: false,
	add: (message) => set({ message }),
	setShowMessageBoolean: (value) => set({ showMessageBoolean: value }),
}));

type CounterStore = {
	count: number;
	increment: () => void;
	decrement: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
	count: 0,
	increment: () => set((state) => ({ count: state.count + 1 })),
	decrement: () => set((state) => ({ count: state.count - 1 })),
}));
