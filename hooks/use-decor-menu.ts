import { create } from "zustand";

interface DecorModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useDecorModal = create<DecorModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useDecorModal;
