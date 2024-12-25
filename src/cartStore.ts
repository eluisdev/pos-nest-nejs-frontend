import { create } from "zustand";

interface storeCartProps {
  isOpen: boolean;
  closeMenu: () => void;
  openMenu: () => void;
}
export const cartStore = create<storeCartProps>((set) => ({
  isOpen: false,
  closeMenu: () => {
    set(() => ({
      isOpen: false,
    }));
  },
  openMenu: () => {
    set(() => ({
      isOpen: true,
    }));
  },
}));
