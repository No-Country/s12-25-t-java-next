import { create } from 'zustand'

interface MyStore {
  selectedItems: string[]
  setSelectedItems: (items: string[]) => void
  removeSelectedItem: (item: string) => void
  removeAllItems: () => void
}

export const useSelectedItem = create<MyStore>(set => ({
  selectedItems: [],
  setSelectedItems: items => set({ selectedItems: items }),
  removeSelectedItem: item =>
    set(state => ({
      selectedItems: state.selectedItems.filter(i => i !== item),
    })),
  removeAllItems: () => set({ selectedItems: [] }),
}))
