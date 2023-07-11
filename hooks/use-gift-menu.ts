import { create } from "zustand";

interface GiftModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useGiftModal = create<GiftModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useGiftModal;
