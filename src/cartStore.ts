import { create } from "zustand";

interface storeCartProps {
  isOpen: boolean;
  showMenu: () => void;
}
export const cartStore = create<storeCartProps>((set) => ({
  isOpen: false,
  showMenu: () => {
    set((get) => ({
      isOpen: !get.isOpen,
    }));
  },
}));
